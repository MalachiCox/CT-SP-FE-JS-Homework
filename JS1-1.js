//! Content: Basic JS - Content: Basic data types, bindings, basic builtins, conditionals, 
//! control flow, loops, switch, functions

//? Comment highlighting: Name: Better Comments
//? VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

// Reading: EJS 1-4 https://eloquentjavascript.net/ 

//* Feel free to just log answers to the console - I should be able to just 
//* copy-paste your code into the console and run it to check answers 😎

// HW: 
//* 1. Cube Number Test
// Print out all cubed numbers up to the total value 1000. Meaning that if the cubed number is over 1000 break the loop.

let n = 0;

while (n * n * n <= 1000) {
    console.log(n*n*n);
    n++;
}
console.log('Done')

//* 2. Prime Numbers
// Get first prime numbers up to 100

for (let i = 1; i <= 100; i+=2) {
    console.log(i)
}
console.log('Done')

//* 3. Age Question
// Take in a users input for their age, if they are younger than 18 log kids, 
//if they're 18 to 65 log adults, else log seniors

let age = 19;
if (age < 18) {
    console.log('kids')
} else if (age < 65) {
    console.log('adults')
} else {
    console.log('seniors')
}
console.log('Done')