//! Content: Basic Data Structures

// Reading: EJS 5-6
// HW:
//* 1. Number Filter
// Given a list as a parameter,write a function that returns a list of numbers 
//that are less than ten

// For example: Say your input parameter to the function is [1,11,14,5,8,9]...
// Your output should [1,5,8,9]
// Write a function that takes in two lists and returns the two lists
// merged together and sorted

let arr1 = [1,11,14,5,8,9,3,2,7,10,15];
let arr2 = [1,34,2,76,11,9,23,6,15,4]

function lessThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        let input = array[i]
        if (input < 10) {
            console.log(input);
        }
    }
}

console.log(lessThanTen(arr1))
console.log('Done')

function mergedSort(array1, array2) {
    const merge = array1.concat(array2);
    const reduce = merge.filter((value, index) => merge.indexOf(value) === index);
    const sort = reduce.toSorted(function(a, b) {
        return a - b;
    });

    return sort;
}

console.log(mergedSort(arr1,arr2))
console.log('Done')

//* 2. Build a Shopping Cart
// You can use either lists or dictionaries. The program should have the 
// following capabilities:

// 1) Takes in input
// 2) Stores user input into a dictionary or list
// 3) The User can add or delete items
// 4) The User can see current shopping list
// 5) The program Loops until user 'quits'
// 6) Upon quitting the program, print out all items in the user's list

let list = [];

function shoppingCart() {
    isRunning = true;
    while (isRunning) {
        let userinput =
         prompt("To add an item, type the item you'd like to add or type 'remove' to remove an item: ");
        if (userinput == null) {
            console.log(list);
            break;
        } else if (userinput == 'remove') {
            let item = prompt("What item would you like to remove?: ");
            list.splice(list.indexOf(item), 1);
        } else {
            list.push(userinput);
        }
        console.log(list);
    }
}

// shoppingCart();
// console.log('Done');