// Definition of a Regular Function
// A function in JavaScript is a block of code designed to perform a particular task. 
// Functions are executed when they are invoked (called). They can take parameters and return values.

function regularFunction(param1, param2) {
    return param1 + param2; // Return the sum of two parameters
}

// Example usage of a Regular Function
console.log(regularFunction(5, 10)); // Output: 15


// Definition of an Arrow Function
// An arrow function is a shorter syntax for writing function expressions. 
// It does not have its own `this`, `arguments`, or `super`, and is not suited for use as methods or constructors.

const arrowFunction = (param1, param2) => param1 + param2; // Arrow function syntax

// Example usage of an Arrow Function
console.log(arrowFunction(5, 10)); // Output: 15


// Demonstrating differences between Regular Functions and Arrow Functions

// 1. `this` Binding Example
function Regular() {
    this.value = 42;
    setTimeout(function() {
        console.log(this.value); // Regular function; `this` is undefined in strict mode or refers to global object
    }, 1000);
}

const reg = new Regular(); // Output after 1 second: undefined (or an error in strict mode)

const Arrow = () => {
    this.value = 42;
    setTimeout(() => {
        console.log(this.value); // Arrow function; `this` refers to the instance of Arrow
    }, 1000);
};

const arr = new Arrow(); // Output after 1 second: 42


// 2. `arguments` Object Example
function regularWithArguments() {
    console.log(arguments); // Logs all passed arguments
}

regularWithArguments(1, 2, 3); // Output: [1, 2, 3]

const arrowWithArguments = (...args) => {
    console.log(args); // Logs all passed arguments
};

arrowWithArguments(1, 2, 3); // Output: [1, 2, 3]


// 3. Constructor Example
function Person(name) {
    this.name = name; // Regular function can be used as a constructor
}

const person = new Person("Alice");
console.log(person.name); // Output: Alice

const PersonArrow = (name) => {
    this.name = name; // Arrow functions cannot be used as constructors
};

// const personArrow = new PersonArrow("Alice"); // TypeError: PersonArrow is not a constructor


// 4. Method Context Example
const obj = {
    value: 42,
    regularMethod: function() {
        console.log(this.value); // Regular function; `this` refers to obj
    }
};

obj.regularMethod(); // Output: 42

const objArrow = {
    value: 42,
    arrowMethod: () => {
        console.log(this.value); // Arrow function; `this` refers to the surrounding context, not objArrow
    }
};

objArrow.arrowMethod(); // Output: undefined (or an error in strict mode)

// Summary of Differences
console.log("Differences between Regular Functions and Arrow Functions:");
console.log("1. Regular functions have their own 'this'; arrow functions do not.");
console.log("2. Regular functions can be used as constructors; arrow functions cannot.");
console.log("3. Regular functions have access to the 'arguments' object; arrow functions do not.");
console.log("4. Regular functions can be called with different contexts; arrow functions inherit 'this' from the lexical scope.");
