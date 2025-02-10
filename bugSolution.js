function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

//This improved version uses strict equality and type checking for better clarity and robustness.
function fooImproved(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle null and non-number input
  }
  return a + b;
}

console.log(fooImproved(null, 5)); // Output: NaN
console.log(fooImproved(5, null)); // Output: NaN
console.log(fooImproved(5, 5)); // Output: 10
console.log(fooImproved(5, 'a')); // Output: NaN
console.log(fooImproved(null, null)); //Output: NaN