// JavaScript String

const string = "This is my string";
console.log(string)

// JavaScript String Methods

// 1. .length
// Returns the length of the string
let text = "Hello, World!";
console.log(text.length); // Outputs: 13

// 2. .toUpperCase()
// Converts all characters in the string to uppercase
let upperText = text.toUpperCase();
console.log(upperText); // Outputs: "HELLO, WORLD!"

// 3. .toLowerCase()
// Converts all characters in the string to lowercase
let lowerText = text.toLowerCase();
console.log(lowerText); // Outputs: "hello, world!"

// 4. .includes()
// Checks if a string contains a specific substring
let hasHello = text.includes("Hello");
console.log(hasHello); // Outputs: true

// 5. .indexOf()
// Returns the index of the first occurrence of a specified value in a string
let index = text.indexOf("World");
console.log(index); // Outputs: 7

// 6. .slice()
// Extracts a portion of the string based on start and end indexes
let slicedText = text.slice(7, 12); // Extracts "World"
console.log(slicedText); // Outputs: "World"


// 8. .replace()
// Replaces a specified value with another value in the string
let newText = text.replace("World", "Everyone");
console.log(newText); // Outputs: "Hello, Everyone!"

// 9. .trim()
// Removes whitespace from both ends of a string
let paddedText = "   Hello, World!   ";
let trimmedText = paddedText.trim();
console.log(trimmedText); // Outputs: "Hello, World!"

// 10. .split()
// Splits the string into an array based on a specified delimiter
let splitText = text.split(", "); // Splits string at ", "
console.log(splitText); // Outputs: ["Hello", "World!"]

// 11. .charAt()
// Returns the character at the specified index
let charAtIndex = text.charAt(1);
console.log(charAtIndex); // Outputs: "e"

// 12. .concat()
// Joins two or more strings
let greeting = "Hello";
let subject = "World";
let fullGreeting = greeting.concat(", ", subject, "!");
console.log(fullGreeting); // Outputs: "Hello, World!"



// 15. .repeat()
// Repeats the string a specified number of times
let repeatedText = "Hi".repeat(3);
console.log(repeatedText); // Outputs: "HiHiHi"
