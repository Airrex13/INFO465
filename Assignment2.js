// Import the 'readline' module to read user input from the command line
const readline = require("readline");

// Create a readline interface to accept input and print output in the terminal
const rl = readline.createInterface({
  input: process.stdin,   // Standard input (keyboard)
  output: process.stdout  // Standard output (console)
});

// Initialize an empty array to store all valid integers entered by the user
let numbers = [];

// Define a function that asks the user for input repeatedly
function ask() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    
    // Check if the user wants to quit (handles both 'q' and 'Q')
    if (input.toLowerCase() === 'q') {
      // If no numbers were entered before quitting
      if (numbers.length === 0) {
        console.log("No numbers were entered.");
      } else {
        // Print the list of numbers entered
        console.log("You entered:", numbers);
        // Check if any two numbers multiply to a third
        checkCondition(numbers);
      }
      // Close the readline interface (ends the program)
      rl.close();
      return;
    }

    // Convert input to a number
    const num = Number(input);

    // Validate input: check if it's an integer
    if (!Number.isInteger(num)) {
      console.log("Invalid input. Please enter an integer or 'q' to quit.");
    } else {
      // If it's a valid integer, store it in the array
      numbers.push(num);
    }

    // Prompt the user again
    ask();
  });
}

// Function to check if any two distinct numbers in the array
// multiply together to equal another number in the same array
function checkCondition(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) { // Make sure we're not multiplying a number by itself
        const product = arr[i] * arr[j];
        
        // Check if the product exists in the array AND
        // it's not equal to either number that created it
        if (
          arr.includes(product) &&
          product !== arr[i] &&
          product !== arr[j]
        ) {
          // If condition is met, display it and exit function
          console.log(`Condition is met: ${arr[i]} x ${arr[j]} = ${product}`);
          return;
        }
      }
    }
  }

  // If no valid product match is found
  console.log("Condition was not met.");
}

// Start the input loop
ask();
