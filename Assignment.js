
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

// Function to calculate the mean (average)
function calculateMean(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

// Function to calculate the median
function calculateMedian(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

// Recursive function to ask user input
function getInput() {
    rl.question('Enter an integer (or "q" to quit): ', (input) => {
        if (input.toLowerCase() === 'q') {
            if (numbers.length === 0) {
                console.log("No numbers entered. Exiting...");
                rl.close();
                return;
            }
            const mean = calculateMean(numbers);
            const median = calculateMedian(numbers);
            console.log("\nResults:");
            console.log("Numbers:", numbers);
            console.log("Mean:", mean.toFixed(2));
            console.log("Median:", median.toFixed(2));
            rl.close();
        } else {
            const num = parseInt(input, 10);
            if (isNaN(num)) {
                console.log("Invalid input. Please enter an integer or 'q' to quit.");
            } else {
                numbers.push(num);
            }
            getInput(); // Continue asking for input
        }
    });
}

// Start the input loop
console.log("Welcome! This program calculates the mean and median of a list of integers.");
getInput();
