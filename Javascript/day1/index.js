//--------------------------------------------- JAVASCRIPT------------------------------------------
// JAVASCRIPT is a high level programming language. It is scatic language that change static to dynamic web/web page



// ------------------ -------------------- Variables in javascript ---------------------------------

// Variable
// A variable is a named reference to a value.

// let , var ,const

// var allows re-declaration and is function-scoped (ignores block scope).
// let is block-scoped and can’t be re-declared within the same scope.
// const is block-scoped and must be initialized when declared. It cannot be re-assigned or re-declared within the same scope.

// First Program
console.log("hello world"); // Fix the typo from "hello worls"

// Variables in JavaScript

// var example (You can re-declare var)
var num = 45;
var num = 40; // Re-declaring and overwriting the previous num
console.log(num); // Outputs: 40

// Scope with var (var is function-scoped, not block-scoped)
var num = 43;
{
  var num = 3; // Overwrites the global num variable, not limited to the block
}
console.log(num); // Outputs: 3

// Another example with var
var num = 43;
{
  num = 3; // Modifies the global num variable
}
console.log(num); // Outputs: 3

// let example (Block-scoped, cannot be re-declared in the same block)
let number = 49;
// let number = 4567; // Uncommenting this will cause an error
console.log(number); // Outputs: 49

// Scope with let
let numb = 45;
{
  let numb = 444; // Block-scoped, different from the outer 'numb'
}
console.log(numb); // Outputs: 45

// Another example with let
let numb2 = 45;
{
   numb2 = 44; // Modifies the outer 'numb2' variable
}
console.log(numb2); // Outputs: 44

// const example (Cannot be re-assigned or re-declared)
const newnum = 45355;
// newnum = 456; // Uncommenting this will throw an error because 'const' cannot be re-assigned
// const newnum = 45678; // Uncommenting this will also throw an error because 'const' cannot be re-declared
console.log(newnum); // Outputs: 45355

// Block scope with const
const newnumm = 4355;
{
    // newnumm = 4; // Uncommenting this will throw an error because you cannot re-assign a const variable
}
console.log(newnumm); // Outputs: 4355



// -----------------------------------------DATA TYPES ON JAVASCRIPT---------------------------------------


// JavaScript data types and data structures

// All Programming language have datatypes such as javascript c++ python etc

// JAVASCRIPT DATA TYPES 

// There are seven data types in javascript such as

// Number    data type in JavaScript can be used to hold decimal values as well as values without decimals.
// BigInt,  BigInt data type can represent numbers greater 
// String,  The string data type in JavaScript represents a sequence of characters that are surrounded by single or double quotes
// Boolean,  The boolean data type can accept only two values i.e. true and false.
// null,  This data type can hold only one possible value that is null.
// undefined,  This means that a variable has been declared but has not been assigned a value
// Symbol  Symbol data type is used to create objects which will always be unique.


// Number    data type in JavaScript can be used to hold decimal values as well as values without decimals.
let a = 250;
let y = 40.5;
console.log("Value of x=" + a);
console.log("Value of y=" + y);


// String,  The string data type in JavaScript represents a sequence of characters that are surrounded by single or double quotes
let str = 'Hello All';
let str1 = "Welcome to my new house";
console.log("Value of str=" + str);
console.log("Value of str1=" + str1);


// undefined,  This means that a variable has been declared but has not been assigned a value
let xx;
console.log(xx); // Outputs: undefined


// Boolean,  The boolean data type can accept only two values i.e. true and false.
let b;
console.log(b); // Outputs: undefined


// null,  This data type can hold only one possible value that is null.
let cx = null;
console.log("Value of x=" + cx);



// BigInt,  BigInt data type can represent numbers greater 
let bigNum = 123422222222222222222222222222222222222n
console.log(bigNum)



// Symbol  Symbol data type is used to create objects which will always be unique.
let sym = Symbol("Hello")
console.log(typeof(sym));
console.log(sym);



// ---------------------------Primitives and nonprimitives data types in js--------------------------

// primitive data types.  THAT REPRESENT SINGLE VALUE
// Number 
// String,
// Boolean,
// null,
// undefined,
// Symbol,
// BigInt


// Non-primitive data types.   THAT REPRESENT MULTIPLE VALUE
// Object

let person = {
    firstName: "Luiza",
    lastName: "Shaikh",
};
// Array
let d = new Array();
let e = new Array(10);
let f = new Array(1, 2, 3, "Hello");
console.log("value of a=" + d);
console.log("value of b" + e);
console.log("value of d=" + f);


// -------------------------------------JavaScript Operators-----------------------

// JavaScript Operators are used to perform specific mathematical and logical computations on operands


let q = 17;
let w = "GeeksforGeeks";
let r = "";
let t = null;

console.log("Type of a = " + (typeof q));
console.log("Type of b = " + (typeof w));
console.log("Type of c = " + (typeof r));
console.log("Type of d = " + (typeof t));
console.log("Type of e = " + (typeof e));


// JavaScript Arithmetic Operators

// +	Addition	Adds two numbers together.
// -	Subtraction	Subtracts the right number from the left.
// *	Multiplication	Multiplies two numbers together.
// /	Division	Divides the left number by the right.

// JavaScript Comparison Operators
// (==) ( === ) is a comparison operator 

// JavaScript Logical Operators
// && (logical AND), || (logical OR), and ! (logical NOT).


// JavaScript Assignment Operators
// Addition assignment	x += f()	x = x + f()
// Subtraction assignment	x -= f()	x = x - f()
// Multiplication assignment	x *= f()	x = x * f()
// Division assignment	x /= f()	x = x / f()


// Arithmetic Operators
// +	Addition	Adds two numbers together.
let addition = 5 + 3; // Adds 5 and 3, result: 8
console.log("Addition: " + addition); // Outputs: 8

// -	Subtraction	Subtracts the right number from the left.
let subtraction = 10 - 4; // Subtracts 4 from 10, result: 6
console.log("Subtraction: " + subtraction); // Outputs: 6

// *	Multiplication	Multiplies two numbers together.
let multiplication = 7 * 6; // Multiplies 7 by 6, result: 42
console.log("Multiplication: " + multiplication); // Outputs: 42

// /	Division	Divides the left number by the right.
let division = 20 / 4; // Divides 20 by 4, result: 5
console.log("Division: " + division); // Outputs: 5

// JavaScript Comparison Operators
// (==) is the loose equality comparison operator.
let isEqualLoose = (5 == '5'); // Compares value only, result: true
console.log("Loose Equality (==): " + isEqualLoose); // Outputs: true

// (===) is the strict equality comparison operator.
let isEqualStrict = (5 === '5'); // Compares value and type, result: false
console.log("Strict Equality (===): " + isEqualStrict); // Outputs: false

// JavaScript Logical Operators
// && (logical AND) returns true if both operands are true.
let andResult = (5 > 3 && 8 > 6); // Both conditions are true, result: true
console.log("Logical AND (&&): " + andResult); // Outputs: true

// || (logical OR) returns true if one of the operands is true.
let orResult = (5 < 3 || 8 > 6); // One condition is true, result: true
console.log("Logical OR (||): " + orResult); // Outputs: true

// ! (logical NOT) negates the result.
let notResult = !(5 > 3); // Negates true, result: false
console.log("Logical NOT (!): " + notResult); // Outputs: false

// JavaScript Assignment Operators
// Addition assignment	x += f()	x = x + f()
let x = 10; 
x += 5; // Adds 5 to x (x = x + 5), result: 15
console.log("Addition Assignment (x += 5): " + x); // Outputs: 15

// Subtraction assignment	x -= f()	x = x - f()
x -= 3; // Subtracts 3 from x (x = x - 3), result: 12
console.log("Subtraction Assignment (x -= 3): " + x); // Outputs: 12

// Multiplication assignment	x *= f()	x = x * f()
x *= 2; // Multiplies x by 2 (x = x * 2), result: 24
console.log("Multiplication Assignment (x *= 2): " + x); // Outputs: 24

// Division assignment	x /= f()	x = x / f()
x /= 4; // Divides x by 4 (x = x / 4), result: 6
console.log("Division Assignment (x /= 4): " + x); // Outputs: 6
