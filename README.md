# TypeScript Type Error: Incorrect Argument Type

This repository demonstrates a common type error in TypeScript where an array is passed to a function expecting a single value.

## Bug Description
The `greeter` function is designed to accept a single string and return a greeting. However, an array of strings is passed as an argument. TypeScript correctly throws an error because the function signature requires a string, not an array.

## Solution
The solution involves either modifying the `greeter` function to handle arrays or changing how the array is passed to the function.  One approach is to iterate through the array and call `greeter` for each element.