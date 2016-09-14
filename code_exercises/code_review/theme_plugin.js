var path = require('path');
var _ = require('lodash');
var CSS_FILE = /\.s?css$/;

/**
* Presto Theme Plugin
* Renders themed assets, then adds them to the compilation.
* Also generates a theme usage report for the compilation.
* This plugin may be disabled by omitting a THEME_CONFIG_PATH.
*
* Plugin augments the Webpack build process as follows:
* 1. Looks through all chunks for CSS files.
* 2. Renders a themed version of each CSS file.
* 3. Generates a template version of each CSS file.
*/
function PrestoThemePlugin(opts, buildConfig, usage) {
  this.options = opts;
  this.buildConfig = buildConfig || {};
  this.cache = {};
}

PrestoThemePlugin.prototype = {
  /**
  * Applies the plugin to webpack.
  * (does nothing when build config/theme vars are omitted)
  */
  apply: function(compiler) {
    if (!this.buildConfig.theme || !this.options.THEME_CONFIG_PATH) return;

    this.format = _.assign({
      file_ext: 'css.erb',
      field_pattern: '____([\\w-]+)',
      field_open: '<%= ',
      field_close: ' %>',
      snake_case: true
    }, this.buildConfig.theme || {});

    this.varsRegEx = new RegExp(this.format.field_pattern, 'g');
    this.vars = require(this.options.THEME_CONFIG_PATH);

    compiler.plugin('emit', function(compilation, callback) {
      compilation.chunks.forEach(function(chunk) {
        // Use imperitive loop that hard-stops
        // upon reaching the end of the original list length.
        // This loop will be adding theme template file references.
        for (var i = 0, len = chunk.files.length; i < len; i += 1) {
          var assetFile = chunk.files[i];
          if (CSS_FILE.test(assetFile)) {
            // Render themed assets for each CSS file:
            // the original CSS file is rendered with values,
            // and the themed template version is rendered with interpolations.
            var dirty = (chunk.changedTypes && chunk.changedTypes.indexOf('css') > -1);
            var themeFile = assetFile.replace(CSS_FILE, '.'+this.format.file_ext);
            
            // Render theme file BEFORE basic asset file...
            // this makes sure the alternate asset is generated
            // before the original asset source is replaced.
            this.renderAssetFile(compilation, dirty, assetFile, themeFile);
            this.renderAssetFile(compilation, dirty, assetFile);

            // Update chunk graph and write files list.
            chunk.files.push(themeFile);
          }
        }
        
        callback();

      }.bind(this));
    }.bind(this));
  },

  /**
  * Renders a generated asset files into a finished asset.
  * Expects that generated assets contain field placeholders,
  * which will get replaced by values or interpolations
  * (dependending on output format).
  */
  renderAssetFile: function(compilation, dirty, assetFile, themeFile) {
    var basename = assetFile.split('.')[0];
    var renderFile = themeFile || assetFile;

    // Re-render source when dirty or missing:
    if (dirty || !this.cache[renderFile]) {
      var source = compilation.assets[assetFile].source();

      if (themeFile) {
        source = this.fieldIdentifiersToInterpolations(source);
      } else {
        // Run usage mapping on original source files during builds:
        source = this.fieldIdentifiersToValues(source);
      }

      this.cache[renderFile] = {
        source: function() { return source; },
        size:   function() { return source.length; }
      };
    }
    
    // Transfer cached rendering into 
    compilation.assets[renderFile] = this.cache[renderFile];
    
    // Also awful, supporting the legacy bundler system:
    if (themeFile) {
      compilation.assets[basename+'.'+this.format.file_ext] = this.cache[renderFile];
    }
  },

  /**
  * Replaces parsed field identifiers into template interpolations.
  * Example: "____color-primary" >> "<%= @color_primary %>"
  * This method is intended to run on rendered CSS containing parsed fields.
  * @param {String} css string to find and replace parsed fields within.
  * @returns {String} the rendered string with fields formatted as interpolations.
  */
  fieldIdentifiersToInterpolations: function(css) {
    return css.replace(this.varsRegEx, function(match, fieldName) {
      if (this.vars.hasOwnProperty(fieldName)) {
        if (this.format.snake_case) fieldName = fieldName.toLowerCase().replace(/-/g, '_');
        return this.format.field_open + fieldName + this.format.field_close;
      }
      return match;
    }.bind(this));
  },

  /**
  * Replaces parsed field identifiers into mapped variable values.
  * Example: "____color-primary" >> "#f00"
  * This method is intended to run on rendered CSS containing parsed fields.
  * @param {String} css string to find and replace parsed fields within.
  * @returns {String} the rendered string with fields formatted as values.
  */
  fieldIdentifiersToValues: function(css) {
    return css.replace(this.varsRegEx, function(match, fieldName) {
      return this.vars.hasOwnProperty(fieldName) ? this.vars[fieldName] : match;
    }.bind(this));
  }
};

module.exports = PrestoThemePlugin;