# Implicit Type Coercion Bug in JavaScript

This repository demonstrates a common, yet easily overlooked, bug in JavaScript: implicit type coercion. The `foo` function in `bug.js` showcases how JavaScript's loose typing can lead to unexpected string concatenation instead of numerical addition.

The solution in `bugSolution.js` explicitly handles type checking before performing operations.  This highlights the importance of strong type checking or using appropriate type conversion methods when combining different data types in JavaScript.