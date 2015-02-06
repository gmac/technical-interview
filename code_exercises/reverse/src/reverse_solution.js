// Write a function that reverses a string...
// (should be easy to solve, but can be probed for deeper understanding of computational complexity)


function reverse(str) {
  return str.split('').reverse().join('');
}


function reverse(str) {
  var reversed = '';

  for (var i = str.length-1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}