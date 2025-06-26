const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let numbers = [];

function ask() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    if (input.toLowerCase() === 'q') {
      if (numbers.length === 0) {
        console.log("No numbers were entered.");
      } else {
        console.log("You entered:", numbers);
        checkCondition(numbers);
      }
      rl.close();
      return;
    }

    const num = Number(input);
    if (!Number.isInteger(num)) {
      console.log("Invalid input. Please enter an integer or 'q' to quit.");
    } else {
      numbers.push(num);
    }

    ask();
  });
}

function checkCondition(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        const product = arr[i] * arr[j];
        if (arr.includes(product) && product !== arr[i] && product !== arr[j]) {
          console.log(`Condition is met: ${arr[i]} x ${arr[j]} = ${product}`);
          return;
        }
      }
    }
  }
  console.log("Condition was not met.");
}

ask();
