const numberArray = [10,20,30];

console.log(numberArray);  // Printing array

// Array push
numberArray.push(100);
console.log(numberArray); // Added 100 in last index

// Array pop

numberArray.pop();

console.log(numberArray);  // Remove 100 from last index

// shifting array from start index
numberArray.shift();
console.log(numberArray);

// Adding element at start of index
numberArray.unshift('John');
console.log(numberArray); // O/P : ['John', 20, 30]

