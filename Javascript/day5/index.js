// for-loop-example.js

// Using a for loop to print numbers from 1 to 5
console.log("For Loop:");

// Initialize i to 1, check if i is less than or equal to 5, and increment i by 1 after each iteration
for (let i = 1; i <= 5; i++) {
  // Print the current iteration number
  console.log(`Iteration: ${i}`);
}


// while-loop-example.js

// Using a while loop to print numbers from 1 to 5
console.log("While Loop:");

// Initialize j to 1
let j = 1;

// The loop will continue as long as j is less than or equal to 5
while (j <= 5) {
  // Print the current iteration number
  console.log(`Iteration: ${j}`);
  
  // Increment j by 1 to move to the next number
  j++;
}


// do-while-loop-example.js

// Using a do...while loop to print numbers from 1 to 5
console.log("Do...While Loop:");

// Initialize k to 1
let k = 1;

// The loop will execute at least once, then check the condition
do {
  // Print the current iteration number
  console.log(`Iteration: ${k}`);
  
  // Increment k by 1 to move to the next number
  k++;
} while (k <= 5); // The loop continues while k is less than or equal to 5


// for-in-loop-example.js

// Using a for...in loop to iterate over properties of an object
console.log("For...In Loop:");

// Create an object representing a person with different properties
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

// The for...in loop iterates over each key in the person object
for (let key in person) {
  // Print the key and its corresponding value
  console.log(`${key}: ${person[key]}`);
}



// for-of-loop-example.js

// Using a for...of loop to iterate over elements in an array
console.log("For...Of Loop:");

// Create an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];

// The for...of loop iterates over each fruit in the fruits array
for (let fruit of fruits) {
  // Print the current fruit
  console.log(`Fruit: ${fruit}`);
}


// loops-example.js

// 1. For Loop
console.log("For Loop:");
// Using a for loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  // Print the current iteration number
  console.log(`Iteration: ${i}`);
}

console.log("\n"); // Line break for readability

// 2. While Loop
console.log("While Loop:");
// Using a while loop to print numbers from 1 to 5
let j = 1; // Initialize j to 1
while (j <= 5) {
  // Print the current iteration number
  console.log(`Iteration: ${j}`);
  j++; // Increment j by 1
}

console.log("\n"); // Line break for readability

// 3. Do...While Loop
console.log("Do...While Loop:");
// Using a do...while loop to print numbers from 1 to 5
let k = 1; // Initialize k to 1
do {
  // Print the current iteration number
  console.log(`Iteration: ${k}`);
  k++; // Increment k by 1
} while (k <= 5); // Continue the loop while k is less than or equal to 5

console.log("\n"); // Line break for readability

// 4. For...In Loop
console.log("For...In Loop:");
// Using a for...in loop to iterate over properties of an object
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

// The for...in loop iterates over each key in the person object
for (let key in person) {
  // Print the key and its corresponding value
  console.log(`${key}: ${person[key]}`);
}

console.log("\n"); // Line break for readability

// 5. For...Of Loop
console.log("For...Of Loop:");
// Using a for...of loop to iterate over elements in an array
const fruits = ["Apple", "Banana", "Cherry"];

// The for...of loop iterates over each fruit in the fruits array
for (let fruit of fruits) {
  // Print the current fruit
  console.log(`Fruit: ${fruit}`);
}



// for-sum-example.js

// Using a for loop to calculate the sum of numbers from 1 to 10
console.log("For Loop - Sum Example:");
let sum = 0; // Initialize sum variable to store the total

// Loop through numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  sum += i; // Add the current number to the sum
}

// Print the final sum
console.log(`The sum of numbers from 1 to 10 is: ${sum}`);







// while-guess-example.js

// Using a while loop for a simple guessing game
console.log("While Loop - Guessing Game Example:");
const secretNumber = 7; // Secret number to guess
let guess; // Variable to store user guess

// Continue looping until the user guesses the correct number
while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess the secret number (1-10):")); // Get user input
  if (guess === secretNumber) {
    console.log("Congratulations! You guessed the correct number!");
  } else {
    console.log("Try again!"); // Prompt user to try again
  }
}







// do-while-menu-example.js

// Using a do...while loop for a simple menu selection
console.log("Do...While Loop - Menu Example:");

let choice; // Variable to store user choice

do {
  // Display the menu options
  console.log("\nMenu:");
  console.log("1. Option 1");
  console.log("2. Option 2");
  console.log("3. Exit");
  
  // Get user choice
  choice = parseInt(prompt("Enter your choice:"));
  
  // Respond based on user choice
  switch (choice) {
    case 1:
      console.log("You selected Option 1.");
      break;
    case 2:
      console.log("You selected Option 2.");
      break;
    case 3:
      console.log("Exiting the menu.");
      break;
    default:
      console.log("Invalid choice. Please try again.");
  }
} while (choice !== 3); // Continue until user chooses to exit




// most important information for in loop use in object and for of loop use in array

// for-in-book-example.js

// Using a for...in loop to display properties of a book object
console.log("For...In Loop - Book Example:");

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction"
};

// Loop through each property in the book object
for (let key in book) {
  console.log(`${key}: ${book[key]}`); // Print the property name and value
}



// most important information for in loop use in object and for of loop use in array
// for-of-max-example.js

// Using a for...of loop to find the maximum number in an array
console.log("For...Of Loop - Max Number Example:");

const numbers = [10, 5, 3, 8, 15, 2]; // Array of numbers
let maxNumber = numbers[0]; // Initialize maxNumber with the first element

// Loop through each number in the array
for (let number of numbers) {
  if (number > maxNumber) {
    maxNumber = number; // Update maxNumber if the current number is greater
  }
}

// Print the maximum number
console.log(`The maximum number is: ${maxNumber}`);









// combined-loops-example.js

// 1. For Loop - Sum Example
console.log("For Loop - Sum Example:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`The sum of numbers from 1 to 10 is: ${sum}`);

console.log("\n"); // Line break for readability

// 2. While Loop - Guessing Game Example
console.log("While Loop - Guessing Game Example:");
const secretNumber = 7;
let guess;
while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess the secret number (1-10):"));
  if (guess === secretNumber) {
    console.log("Congratulations! You guessed the correct number!");
  } else {
    console.log("Try again!");
  }
}

console.log("\n"); // Line break for readability

// 3. Do...While Loop - Menu Example
console.log("Do...While Loop - Menu Example:");
let choice;
do {
  console.log("\nMenu:");
  console.log("1. Option 1");
  console.log("2. Option 2");
  console.log("3. Exit");
  
  choice = parseInt(prompt("Enter your choice:"));
  
  switch (choice) {
    case 1:
      console.log("You selected Option 1.");
      break;
    case 2:
      console.log("You selected Option 2.");
      break;
    case 3:
      console.log("Exiting the menu.");
      break;
    default:
      console.log("Invalid choice. Please try again.");
  }
} while (choice !== 3);

console.log("\n"); // Line break for readability

// 4. For...In Loop - Book Example
console.log("For...In Loop - Book Example:");
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction"
};
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

console.log("\n"); // Line break for readability

// 5. For...Of Loop - Max Number Example
console.log("For...Of Loop - Max Number Example:");
const numbers = [10, 5, 3, 8, 15, 2];
let maxNumber = numbers[0];
for (let number of numbers) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(`The maximum number is: ${maxNumber}`);


