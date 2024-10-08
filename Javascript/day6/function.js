
// An arrow function is a concise way to write functions in JavaScript 
// introduced in ES6 (ECMAScript 2015). They provide a more succinct syntax
//  compared to traditional function expressions and also have
//  some unique characteristics regarding the handling of the this keyword



// Arrow Function Examples

// 1. Basic Arrow Function
const multiply = (a, b) => a * b; // Multiplies two numbers
console.log(multiply(5, 10)); // Output: 50

// 2. Arrow Function with No Parameters
const greet = () => console.log("Hello, World!"); // Logs a greeting to the console
greet(); // Output: Hello, World!

// 3. Arrow Function with One Parameter
const double = x => x * 2; // Doubles the given number
console.log(double(4)); // Output: 8

// 4. Returning an Object Literal
const getPerson = (name, age) => ({ name, age }); // Returns an object with name and age
console.log(getPerson("Alice", 30)); // Output: { name: "Alice", age: 30 }

// 5. Arrow Function with Default Parameters
const greetUser = (name = "Guest") => `Hello, ${name}!`; // Greets a user, defaulting to "Guest"
console.log(greetUser("John")); // Output: Hello, John!
console.log(greetUser()); // Output: Hello, Guest!

// 6. Arrow Function with Rest Parameters
const sum = (...args) => args.reduce((total, num) => total + num, 0); // Sums all arguments passed
console.log(sum(1, 2, 3, 4)); // Output: 10

// 7. Arrow Function for Array Mapping
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num); // Squares each number in the array
console.log(squared); // Output: [1, 4, 9, 16, 25]

// 8. Arrow Function for Filtering an Array
const evenNumbers = numbers.filter(num => num % 2 === 0); // Filters out even numbers
console.log(evenNumbers); // Output: [2, 4]

// 9. Arrow Function with `this` Context
function Person() {
    this.age = 0;

    // Using an arrow function to maintain the context of 'this'
    setInterval(() => {
        this.age++; // 'this' refers to the Person instance
        console.log(this.age); // Logs the incrementing age
    }, 1000);
}

// Create a new Person instance
const p = new Person(); // This will log the incrementing age every second

// 10. Arrow Function Returning a Function
const createCounter = () => {
    let count = 0; // Private variable to hold the count
    return () => {
        count++; // Increment count
        return count; // Return the current count
    };
};

const counter = createCounter(); // Create a new counter instance
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
