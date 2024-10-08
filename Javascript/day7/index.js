// =======================================
// JavaScript Array Methods Comprehensive Example
// =======================================

// ---------------------------------------
// 1. Basic Array Operations
// ---------------------------------------

// The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable name,
// and has members for performing common array operations.

// a. Initialize an empty array and add elements using push()
const basicFruits = [];
basicFruits.push("banana", "apple", "peach");
console.log(basicFruits.length); // Output: 3

// b. Declare an array named 'numbers' and assign values to it
let basicNumbers = [10, 20, 30, 40, 50];  // An array with five elements

// c. Accessing elements by index
console.log(basicNumbers[0]);  // Output: 10
console.log(basicNumbers[2]);  // Output: 30

// d. Modifying elements
basicNumbers[1] = 25;  // The array now becomes [10, 25, 30, 40, 50]

// e. Adding and removing elements using push() and pop()
basicNumbers.push(60);  // The array now becomes [10, 25, 30, 40, 50, 60]
basicNumbers.pop();  // The array now becomes [10, 25, 30, 40, 50]

// f. Getting the length of the array
console.log(basicNumbers.length);  // Output: 5

// g. Iterating over each element using a 'for' loop
for (let i = 0; i < basicNumbers.length; i++) {  // Loop through each element
    console.log(basicNumbers[i]);  // Outputs each element of the array
}

// h. Declare a multidimensional array (an array of arrays)
let matrix = [
  [1, 2, 3],      // First row
  [4, 5, 6],      // Second row
  [7, 8, 9]       // Third row
];

// i. Accessing elements in a multidimensional array
console.log(matrix[1][2]);  // Output: 6

// ---------------------------------------
// 2. Array Methods
// ---------------------------------------

function arrayMethodsExample() {
    console.log('\n--- Array Methods Example ---');

    // ---------------------------------------
    // 1. Mutator Methods
    // ---------------------------------------
    
    // a. push() - Adds one or more elements to the end of an array and returns the new length.
    let fruits = ['apple', 'banana']; // Initialize the 'fruits' array with two elements
    fruits.push('cherry'); // Add 'cherry' to the end of the array
    console.log(fruits); // Output: ['apple', 'banana', 'cherry']
    
    // b. pop() - Removes the last element from an array and returns that element.
    let lastFruit = fruits.pop(); // Remove the last element ('cherry') from the array
    console.log(lastFruit); // Output: 'cherry'
    console.log(fruits); // Output: ['apple', 'banana']
    
    // c. unshift() - Adds one or more elements to the beginning of an array and returns the new length.
    fruits.unshift('apple'); // Add 'apple' to the beginning of the array
    console.log(fruits); // Output: ['apple', 'banana']
    
    // d. shift() - Removes the first element from an array and returns that element.
    let firstFruit = fruits.shift(); // Remove the first element ('apple') from the array
    console.log(firstFruit); // Output: 'apple'
    console.log(fruits); // Output: ['banana']
    
    // e. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    // Example 1: Removing elements
    fruits = ['apple', 'banana', 'cherry', 'date']; // Reinitialize 'fruits' array
    let removedFruits = fruits.splice(1, 2); // Remove 2 elements starting from index 1 ('banana', 'cherry')
    console.log(removedFruits); // Output: ['banana', 'cherry']
    console.log(fruits); // Output: ['apple', 'date']
    
    // Example 2: Adding elements
    fruits.splice(1, 0, 'banana', 'cherry'); // Add 'banana' and 'cherry' at index 1 without removing any elements
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']
    
    // f. reverse() - Reverses the order of the elements in an array in place.
    let numbers = [1, 2, 3, 4]; // Initialize 'numbers' array
    numbers.reverse(); // Reverse the array
    console.log(numbers); // Output: [4, 3, 2, 1]
    
    // g. sort() - Sorts the elements of an array in place and returns the sorted array.
    // Example 1: Sorting strings
    let fruitList = ['banana', 'apple', 'cherry']; // Initialize 'fruitList' array
    fruitList.sort(); // Sort the array alphabetically
    console.log(fruitList); // Output: ['apple', 'banana', 'cherry']
    
    // Example 2: Sorting numbers with a compare function
    let numList = [4, 2, 5, 1, 3]; // Initialize 'numList' array
    numList.sort((a, b) => a - b); // Sort the array numerically in ascending order
    console.log(numList); // Output: [1, 2, 3, 4, 5]
    
    // ---------------------------------------
    // 2. Accessor Methods
    // ---------------------------------------
    
    // a. concat() - Merges two or more arrays and returns a new array.
    let arr1 = [1, 2]; // Initialize 'arr1' array
    let arr2 = [3, 4]; // Initialize 'arr2' array
    let mergedArray = arr1.concat(arr2); // Merge 'arr1' and 'arr2' into 'mergedArray'
    console.log(mergedArray); // Output: [1, 2, 3, 4]
    
    // b. slice() - Returns a shallow copy of a portion of an array into a new array.
    // Syntax: array.slice(begin, end)
    let slicedFruits = fruits.slice(1, 3); // Slice elements from index 1 to 3 (excluding index 3)
    console.log(slicedFruits); // Output: ['banana', 'cherry']
    console.log(fruits); // Original array remains unchanged: ['apple', 'banana', 'cherry', 'date']
    
    // c. includes() - Determines whether an array includes a certain value and returns a boolean.
    let hasBanana = fruits.includes('banana'); // Check if 'banana' is in the array
    console.log(hasBanana); // Output: true
    let hasDate = fruits.includes('date'); // Check if 'date' is in the array
    console.log(hasDate); // Output: true
    let hasGrape = fruits.includes('grape'); // Check if 'grape' is in the array
    console.log(hasGrape); // Output: false
    
    // d. indexOf() - Returns the first index at which a given element can be found, or -1 if not present.
    let firstBananaIndex = fruits.indexOf('banana'); // Find the index of 'banana'
    console.log(firstBananaIndex); // Output: 1
    let grapeIndex = fruits.indexOf('grape'); // Find the index of 'grape'
    console.log(grapeIndex); // Output: -1
    
    // e. lastIndexOf() - Returns the last index at which a given element can be found, or -1 if not present.
    fruits.push('banana'); // Add another 'banana' to the end of the array
    let lastBananaIndex = fruits.lastIndexOf('banana'); // Find the last index of 'banana'
    console.log(lastBananaIndex); // Output: 4
    let lastGrapeIndex = fruits.lastIndexOf('grape'); // Find the last index of 'grape'
    console.log(lastGrapeIndex); // Output: -1
    
    // f. join() - Joins all elements of an array into a string and returns this string.
    // Syntax: array.join(separator)
    let fruitString = fruits.join(', '); // Join elements with ', ' as a separator
    console.log(fruitString); // Output: 'apple, banana, cherry, date, banana'
    
    // ---------------------------------------
    // 3. Iteration Methods
    // ---------------------------------------
    
    // a. forEach() - Executes a provided function once for each array element.
    fruits.forEach((fruit, index) => { // Iterate over each element in 'fruits'
        console.log(`${index}: ${fruit}`); // Output the index and the fruit
    });
    // Output:
    // 0: apple
    // 1: banana
    // 2: cherry
    // 3: date
    // 4: banana
    
    // b. map() - Creates a new array populated with the results of calling a provided function on every element.
    let originalNumbers = [1, 2, 3]; // Initialize 'originalNumbers' array
    let squaredNumbers = originalNumbers.map(num => num * num); // Square each number
    console.log(squaredNumbers); // Output: [1, 4, 9]
    
    // c. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
    let mixedNumbers = [1, 2, 3, 4, 5];
    let evenNumbers = mixedNumbers.filter(num => num % 2 === 0); // Filter out even numbers
    console.log(evenNumbers); // Output: [2, 4]
    
    // d. reduce() - Executes a reducer function on each element, resulting in a single output value.
    // Syntax: array.reduce(callback, initialValue)
    let sum = mixedNumbers.reduce((accumulator, current) => accumulator + current, 0); // Sum all numbers
    console.log(sum); // Output: 15
    
    // e. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
    let hasEvenNumber = mixedNumbers.some(num => num % 2 === 0); // Check if there's at least one even number
    console.log(hasEvenNumber); // Output: true
    
    // f. every() - Tests whether all elements in the array pass the test implemented by the provided function.
    let allEven = [2, 4, 6].every(num => num % 2 === 0); // Check if all numbers are even
    console.log(allEven); // Output: true
    
    let notAllEven = [1, 2, 3].every(num => num % 2 === 0); // Check if all numbers are even
    console.log(notAllEven); // Output: false
    
    // g. find() - Returns the value of the first element that satisfies the provided testing function. Otherwise, undefined is returned.
    let firstEven = mixedNumbers.find(num => num % 2 === 0); // Find the first even number
    console.log(firstEven); // Output: 2
    
    // h. findIndex() - Returns the index of the first element that satisfies the provided testing function. Otherwise, -1 is returned.
    let firstEvenIndex = mixedNumbers.findIndex(num => num % 2 === 0); // Find the index of the first even number
    console.log(firstEvenIndex); // Output: 1
    
    // i. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    // Syntax: array.flat([depth])
    let nestedArray = [1, [2, [3, 4]], 5]; // Initialize a nested array
    let flattenedArray = nestedArray.flat(2); // Flatten the array up to depth 2
    console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
    
    // j. flatMap() - First maps each element using a mapping function, then flattens the result into a new array.
    // Syntax: array.flatMap(callback)
    let words = ['hello', 'world']; // Initialize 'words' array
    let letters = words.flatMap(word => word.split('')); // Split each word into letters and flatten
    console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
    
    // ---------------------------------------
    // 4. Utility Methods
    // ---------------------------------------
    
    // a. fill() - Fills all elements of an array from a start index to an end index with a static value.
    // Syntax: array.fill(value, start, end)
    let fillNumbers = [1, 2, 3, 4]; // Initialize 'fillNumbers' array
    fillNumbers.fill(0, 2, 4); // Fill indices 2 to 4 with 0
    console.log(fillNumbers); // Output: [1, 2, 0, 0]
    
    // b. from() - Creates a new, shallow-copied array instance from an array-like or iterable object.
    // Syntax: Array.from(arrayLike, mapFn)
    let str = 'hello'; // Initialize a string
    let chars = Array.from(str); // Convert string to array of characters
    console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']
    
    let numberSet = new Set([1, 2, 3]); // Initialize a Set
    let numberArray = Array.from(numberSet); // Convert Set to array
    console.log(numberArray); // Output: [1, 2, 3]
    
    // c. isArray() - Determines whether the passed value is an Array.
    // Syntax: Array.isArray(value)
    console.log(Array.isArray([1, 2, 3])); // Output: true
    console.log(Array.isArray('hello')); // Output: false
    
    // d. keys() - Returns a new Array Iterator object that contains the keys for each index in the array.
    let fruitKeys = fruits.keys(); // Get an iterator for the keys of 'fruits' array
    for (let key of fruitKeys) { // Iterate over each key
        console.log(key); // Output each key index
    }
    // Output:
    // 0
    // 1
    // 2
    // 3
    // 4
    
    // e. values() - Returns a new Array Iterator object that contains the values for each index in the array.
    let fruitValues = fruits.values(); // Get an iterator for the values of 'fruits' array
    for (let value of fruitValues) { // Iterate over each value
        console.log(value); // Output each fruit
    }
    // Output:
    // apple
    // banana
    // cherry
    // date
    // banana
    
    // f. entries() - Returns a new Array Iterator object that contains key/value pairs for each index in the array.
    let fruitEntries = fruits.entries(); // Get an iterator for key/value pairs
    for (let [index, value] of fruitEntries) { // Destructure index and value
        console.log(`${index}: ${value}`); // Output index and corresponding fruit
    }
    // Output:
    // 0: apple
    // 1: banana
    // 2: cherry
    // 3: date
    // 4: banana
    
    // ---------------------------------------
    // 5. Combining Array Methods
    // ---------------------------------------
    
    // Example 1: Chaining map() and filter()
    let combinedNumbers = [1, 2, 3, 4, 5, 6]; // Initialize 'combinedNumbers' array
    let processedNumbers = combinedNumbers
        .map(num => num * num) // Square each number: [1, 4, 9, 16, 25, 36]
        .filter(square => square % 2 === 0); // Filter even squares: [4, 16, 36]
    console.log(processedNumbers); // Output: [4, 16, 36]
    
    // Example 2: Using reduce() to group items
    let fruitGroup = ['apple', 'banana', 'cherry', 'avocado', 'blueberry']; // Initialize 'fruitGroup' array
    let groupedFruits = fruitGroup.reduce((accumulator, fruit) => { // Start reducing with an empty object
        let firstLetter = fruit[0]; // Get the first letter of the fruit
        if (!accumulator[firstLetter]) { // If the key doesn't exist in the accumulator
            accumulator[firstLetter] = []; // Initialize it with an empty array
        }
        accumulator[firstLetter].push(fruit); // Push the fruit into the corresponding array
        return accumulator; // Return the accumulator for the next iteration
    }, {}); // Initial value is an empty object
    console.log(groupedFruits);
    /*
    Output:
    {
      a: ['apple', 'avocado'],
      b: ['banana', 'blueberry'],
      c: ['cherry']
    }
    */
    
    // ---------------------------------------
    // 6. Advanced Array Methods
    // ---------------------------------------
    
    // a. reduceRight() - Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
    let rightNumbers = [1, 2, 3, 4]; // Initialize 'rightNumbers' array
    let rightSum = rightNumbers.reduceRight((acc, num) => acc + num, 0); // Sum numbers from right to left
    console.log(rightSum); // Output: 10
    
    // b. findLast() and findLastIndex() - *(ES2022)*
    let lastEven = combinedNumbers.findLast(num => num % 2 === 0); // Find the last even number
    console.log(lastEven); // Output: 6
    
    let lastEvenIdx = combinedNumbers.findLastIndex(num => num % 2 === 0); // Find the index of the last even number
    console.log(lastEvenIdx); // Output: 5
    
    // c. copyWithin() - Shallow copies part of an array to another location in the same array and returns it without modifying its size.
    // Syntax: array.copyWithin(target, start, end)
    let copyNumbers = [1, 2, 3, 4, 5]; // Initialize 'copyNumbers' array
    copyNumbers.copyWithin(0, 3, 5); // Copy elements from index 3 to 5 to the beginning
    console.log(copyNumbers); // Output: [4, 5, 3, 4, 5]
    
    // ---------------------------------------
    // 7. Typed Array Methods
    // ---------------------------------------
    
    // Example: Uint8Array - A typed array that represents an array of 8-bit unsigned integers.
    let buffer = new ArrayBuffer(8); // Create a buffer of 8 bytes
    let uint8 = new Uint8Array(buffer); // Create a Uint8Array view on the buffer
    
    uint8[0] = 255; // Set first element to 255
    uint8[1] = 128; // Set second element to 128
    console.log(uint8); // Output: Uint8Array(8) [255, 128, 0, 0, 0, 0, 0, 0]
    
    // ---------------------------------------
    // 8. Best Practices with Array Methods
    // ---------------------------------------
    
    // a. Immutability - Prefer non-mutating methods like map() and filter() to maintain immutability.
    let immutableNumbers = [1, 2, 3, 4];
    let doubled = immutableNumbers.map(num => num * 2); // Create a new array with doubled values
    console.log(doubled); // Output: [2, 4, 6, 8]
    console.log(immutableNumbers); // Original array remains unchanged: [1, 2, 3, 4]
    
    // b. Chaining - Combine multiple array methods for concise and readable code.
    let chainedResult = immutableNumbers
        .filter(num => num > 2) // Filter numbers greater than 2
        .map(num => num * 3) // Multiply each by 3
        .reduce((acc, num) => acc + num, 0); // Sum them up
    console.log(chainedResult); // Output: 21 (3*3 + 4*3 = 9 + 12 = 21)
    
    // c. Performance - Be mindful of performance implications with large arrays and complex operations.
    // Example: Avoid unnecessary iterations
    let largeArray = Array.from({ length: 100000 }, (_, i) => i + 1); // Create an array [1, 2, ..., 100000]
    let optimizedSum = largeArray.reduce((acc, num) => acc + num, 0); // Efficiently sum all numbers
    console.log(optimizedSum); // Output: 5000050000
    
    // ---------------------------------------
    // Conclusion
    // ---------------------------------------
    
    // This comprehensive JavaScript file demonstrates various array methods, categorized into mutator, accessor, iteration, utility, and advanced methods.
    // Each method is accompanied by detailed comments explaining its functionality and usage.
    // Utilizing these methods effectively can greatly enhance your ability to manipulate and manage data within arrays.
    // Practice these examples to solidify your understanding and apply them to real-world scenarios.
}

// Execute the array methods example
arrayMethodsExample();

let chainedResult = immutableNumbers
    .filter(num => num > 2) // Filter numbers greater than 2
    .map(num => num * 3) // Multiply each by 3
    .reduce((acc, num) => acc + num, 0); // Sum them up
console.log(chainedResult); // Output: 21 (3*3 + 4*3 = 9 + 12 = 21)
