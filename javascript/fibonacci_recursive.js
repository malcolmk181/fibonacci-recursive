function basic_fibonacci(n) {
  // type your code here
  switch(n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// dynamic attempt!
function fibonacci(n) {
  let results = {};

  function fibonacci_helper(results, n) {
    if (n < 2) { return n; }
    else if (results[n]) { return results[n]; }
    else {
      results[n] = fibonacci_helper(results, n-1) + fibonacci_helper(results, n-2);
      return results[n];
    }
  }

  return fibonacci_helper(results, n);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
