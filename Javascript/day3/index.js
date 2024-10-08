// Definition: The `if` statement checks if a condition is true, and if it is, it executes the code block.

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// Explanation:
// The condition checks if age is greater than or equal to 18.
// If true, it prints "You are eligible to vote."



// Definition: The `if-else` statement provides an alternative block of code if the `if` condition is false.

let temperature = 25;

if (temperature > 30) {
  console.log("It's too hot outside.");
} else {
  console.log("The weather is fine.");
}

// Explanation:
// If the temperature is greater than 30, it prints "It's too hot outside."
// If it's 30 or less, it prints "The weather is fine."



// Definition: The `else if` statement is used to check multiple conditions. If the first condition is false, the next `else if` block is checked.

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Explanation:
// The program checks different ranges of the score and prints the corresponding grade.
// If none of the conditions are met, it defaults to printing "Grade: F."


// Definition: The `else` statement is used at the end to provide a fallback when none of the previous conditions are met.

let day = "Wednesday";

if (day === "Monday") {
  console.log("Start of the work week.");
} else if (day === "Wednesday") {
  console.log("Midweek day.");
} else if (day === "Friday") {
  console.log("End of the work week.");
} else {
  console.log("Just another day.");
}

// Explanation:
// The program checks for specific days of the week and prints a message accordingly.
// If no matching day is found, it prints "Just another day."


// Definition: The `switch` statement is an alternative to using many `else if` statements, checking a single value against multiple cases.

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Bananas are rich in potassium.");
    break;
  case "apple":
    console.log("Apples keep the doctor away.");
    break;
  case "orange":
    console.log("Oranges are rich in Vitamin C.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Explanation:
// The `switch` checks the value of `fruit` and executes the corresponding case block.
// If none of the cases match, the `default` block is executed.




// Program: Full Overview of JavaScript Fundamentals

// 1. Declare variables of different data types

let age = 25;                  // number
let name = "Hussnain";          // string
let isStudent = true;           // boolean
let hobbies = ["coding", "reading", "gaming"];  // array
let person = {                  // object
  firstName: "Hussnain",
  lastName: "Mulazam",
  profession: "Developer"
};

// 2. Use Arithmetic operators
let num1 = 10;
let num2 = 5;
let addition = num1 + num2;     // 15
let multiplication = num1 * num2; // 50
let division = num1 / num2;     // 2

console.log("Addition:", addition);       // Output: 15
console.log("Multiplication:", multiplication); // Output: 50
console.log("Division:", division);       // Output: 2

// 3. Comparison operators
if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Explanation: If age is greater than 18, print "You are an adult." Otherwise, print "You are a minor."

// 4. Logical operators
if (age > 18 && isStudent) {
  console.log("You are an adult student.");
} else if (age > 18 && !isStudent) {
  console.log("You are an adult non-student.");
} else {
  console.log("You are under 18.");
}

// Explanation:
// The `&&` operator checks both conditions. The first block runs if the person is above 18 and is a student.
// The second block checks if the person is above 18 but not a student.


// 5. Using arrays
console.log("Your hobbies are:");
hobbies.forEach(function(hobby, index) {
  console.log(index + 1 + ". " + hobby);
});

// Explanation: Loops through the `hobbies` array and prints each hobby with its index.


// 6. Object properties access
console.log("Your full name is: " + person.firstName + " " + person.lastName);
console.log("You work as a " + person.profession);

// Explanation: Accesses and prints properties from the `person` object.


// 7. Conditional statements: `else if`
let score = 85;

if (score >= 90) {
  console.log("You got an A.");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else if (score >= 60) {
  console.log("You got a D.");
} else {
  console.log("You failed.");
}

// Explanation: This block checks the range of the score and prints the corresponding grade.


// 8. Switch statement
let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Wednesday":
    console.log("Mid-week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("It's a regular day.");
}

// Explanation: The `switch` checks the value of `dayOfWeek` and executes the corresponding case block.


// 9. Ternary operator (conditional operator)
let drivingAge = 16;
let canDrive = (age >= drivingAge) ? "You are allowed to drive." : "You are not allowed to drive.";

console.log(canDrive);

// Explanation: The ternary operator checks if age is greater than or equal to drivingAge and prints the appropriate message.


// 10. Type checking (typeof operator)
console.log("Type of age:", typeof age);  // Output: number
console.log("Type of name:", typeof name);  // Output: string
console.log("Type of isStudent:", typeof isStudent);  // Output: boolean
console.log("Type of hobbies:", typeof hobbies);  // Output: object (arrays are technically objects in JS)
console.log("Type of person:", typeof person);  // Output: object

// Explanation: The `typeof` operator is used to check the type of a variable.


// 11. Strict Equality vs Loose Equality (=== vs ==)
let num3 = 10;
let num4 = "10";

if (num3 === num4) {
  console.log("Strict equality: num3 is exactly equal to num4.");
} else {
  console.log("Strict equality: num3 is NOT equal to num4.");
}

if (num3 == num4) {
  console.log("Loose equality: num3 is equal to num4 after type conversion.");
} else {
  console.log("Loose equality: num3 is NOT equal to num4.");
}

// Explanation:
// The `===` checks both value and type, so 10 (number) is not equal to "10" (string).
// The `==` allows type conversion, so it treats both 10 and "10" as equal.

// 12. Using functions
function calculateSum(a, b) {
  return a + b;
}

let result = calculateSum(12, 8);
console.log("Sum of 12 and 8 is:", result); // Output: 20

// Explanation: The function `calculateSum` adds two numbers and returns the result.


// 13. Short-circuit evaluation using logical OR (||)
let username = "";
let defaultUsername = username || "Guest";

console.log("Username:", defaultUsername);

// Explanation: The `||` operator returns the first truthy value.
// If `username` is empty (falsy), it returns "Guest".


// 14. Nested if-else conditions
let hasLicense = true;
let hasCar = false;

if (hasLicense) {
  if (hasCar) {
    console.log("You can drive your car.");
  } else {
    console.log("You have a license, but no car.");
  }
} else {
  console.log("You don't have a license.");
}

// Explanation: This uses nested `if` conditions. It first checks if the user has a license, and then checks if they have a car.
