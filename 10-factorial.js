function factorial(n) {
  // Convert input to integer
  const num = parseInt(n);

  // Base case: factorial of NaN or 0 is 1
  if (isNaN(num) || num <= 0) {
    return 1;
  }

  // Recursive case
  return num * factorial(num - 1);
}

// Read argument from command line
const input = process.argv[2];
const result = factorial(input);

// Print the result using console.log
console.log(`${result}`);
