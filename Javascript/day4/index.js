// Ternary Operator in JavaScript

// ternary operator, also known as the conditional operator,
//  is a concise way to perform conditional evaluations in JavaScript.
//  It allows you to execute expressions 
// based on a condition, acting as a shorthand for if-else statements


// Syntax

// condition ? expressionIfTrue : expressionIfFalse;


// Program: Demonstrating the Ternary Operator in JavaScript

// 1. Basic Usage: Assigning a value based on a condition

let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you are too young to vote.";
console.log(canVote);
// Output: Yes, you can vote.

// Explanation:
// If 'age' is 18 or more, 'canVote' is assigned "Yes, you can vote."
// Otherwise, it's assigned "No, you are too young to vote."

// 2. Nested Ternary Operator: Handling multiple conditions

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(`Your grade is: ${grade}`);
// Output: Your grade is: B

// Explanation:
// Checks multiple ranges to assign the appropriate grade.
// Equivalent to multiple 'else if' statements.

// 3. Returning Different Data Types

let isMember = true;
let discount = isMember ? 0.2 : 0.1; // 20% for members, 10% for non-members
console.log(`Discount applied: ${discount * 100}%`);
// Output: Discount applied: 20%

// Explanation:
// Assigns a numerical discount based on membership status.

// 4. Function Return Values

function getStatus(isOnline) {
  return isOnline ? "Online" : "Offline";
}

console.log(getStatus(true));  // Output: Online
console.log(getStatus(false)); // Output: Offline

// Explanation:
// The function returns "Online" or "Offline" based on the 'isOnline' boolean.

// 5. Inline Conditional Rendering (Common in React)

let userLoggedIn = false;
let welcomeMessage = `Welcome, ${userLoggedIn ? "User!" : "Guest!"}`;
console.log(welcomeMessage);
// Output: Welcome, Guest!

// Explanation:
// Embeds the ternary operator within a string to display different messages.

// 6. Assigning Default Values

let username = "";
let displayName = username ? username : "Anonymous";
console.log(`Hello, ${displayName}!`);
// Output: Hello, Anonymous!

// Using the ternary operator to assign "Anonymous" if 'username' is falsy.

// 7. Short-Circuit Evaluation Alternative

// Equivalent to the above example using logical OR (||) operator
let displayNameAlt = username || "Anonymous";
console.log(`Hello, ${displayNameAlt}!`);
// Output: Hello, Anonymous!

// Explanation:
// While not using the ternary operator, it's worth noting that similar results can be achieved with logical operators.

// 8. Calculating Taxes Based on Income

let income = 75000;
let tax = (income <= 50000) ? income * 0.2 :
           (income <= 100000) ? income * 0.3 :
           income * 0.4;
console.log(`Tax to be paid: $${tax}`);
// Output: Tax to be paid: $22500

// Explanation:
// Calculates tax based on income brackets using nested ternary operators.

// 9. Checking Even or Odd

let number = 7;
let type = (number % 2 === 0) ? "Even" : "Odd";
console.log(`${number} is ${type}.`);
// Output: 7 is Odd.

// Explanation:
// Determines if a number is even or odd.

// 10. Selecting Between Two Functions

function greetMorning() {
  return "Good morning!";
}

function greetEvening() {
  return "Good evening!";
}

let currentHour = new Date().getHours();
let greeting = (currentHour < 12) ? greetMorning() : greetEvening();
console.log(greeting);
// Output depends on the current time

// Explanation:
// Chooses which greeting function to call based on the current hour.

// 11. Handling Multiple Conditions with Arrays

let dayNumber = 3; // 1: Monday, 2: Tuesday, ..., 7: Sunday
let dayName = (dayNumber === 1) ? "Monday" :
              (dayNumber === 2) ? "Tuesday" :
              (dayNumber === 3) ? "Wednesday" :
              (dayNumber === 4) ? "Thursday" :
              (dayNumber === 5) ? "Friday" :
              (dayNumber === 6) ? "Saturday" :
              (dayNumber === 7) ? "Sunday" : "Invalid day";

console.log(`Day ${dayNumber} is ${dayName}.`);
// Output: Day 3 is Wednesday.

// Explanation:
// Maps a number to a day name using nested ternary operators.

// 12. Using with Template Literals for Conditional Styling

let temperatureCelsius = 30;
let weatherStatus = temperatureCelsius > 25 ? "Hot" : "Comfortable";
let weatherMessage = `The weather today is ${weatherStatus}.`;

console.log(weatherMessage);
// Output: The weather today is Hot.

// Explanation:
// Determines the weather status based on temperature and embeds it within a message.



