function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    //Handle type mismatch appropriately (e.g. throw an error or return a default value)
    console.error("Invalid input types.  Expected numbers.");
    return NaN; // Or throw a more descriptive error 
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input types. Expected numbers.
NaN