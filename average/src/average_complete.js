
// Write a function that averages an array of numbers...
// Make all corresponding tests pass.
// You'll probably need to read the tests...

function average(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }

  return numbers.length ? sum / numbers.length : 0;
}