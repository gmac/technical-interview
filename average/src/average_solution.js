// Write a function that averages an array of numbers...
// The "numbers" argument is an array.
// Make all corresponding tests pass.

function average(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }

  return numbers.length ? sum / numbers.length : 0;
}