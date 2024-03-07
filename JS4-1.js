//! Content: Functional programming and higher order 
// TODO: Note to students - these questions are experimental & may not all be 
// TODO: possible presently - do to best of ability using tools from lectures

// Reading: Review EJS 5, review other chapters as needed

// HW:
//* 1.  Filter out all of the empty strings from the list below
// Input: let places = [" ","Argentina", " ", "San Diego","","  ","","Boston","New York"]
// Output: ['Argentina', 'San Diego', 'Boston', 'New York']

// let places = [" ","Argentina", " ", "San Diego","","  ","","Boston","New York"]
// let result = places.filter((place) => place.length > 3);
// console.log(places);
// console.log(result)

//* 2. Write an anonymous function that sorts this list by the last name
// Input: let author = ["Joel Carter", "Victor aNisimov", "Andrew P. Garfield","David hassELHOFF","Gary A.J. Bernstein"]
// Output: ['Victor aNisimov', 'Gary A.J. Bernstein', 'Joel Carter', 'Andrew P. Garfield', 'David hassELHOFF']

const author = ["Joel Carter", "Victor aNisimov", "Andrew P. Garfield","David hassELHOFF","Gary A.J. Bernstein"]

const compareStrings = function (a, b) {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
}

const compare = function (a, b) {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    const splitA = nameA.split(" ");
    const splitB = nameB.split(" ");
    const lastA = splitA[splitA.length - 1];
    const lastB = splitB[splitB.length - 1];
    if (lastA !== lastB) {
      return compareStrings(lastA, lastB);
    };
}

console.log(author.sort(compare));

//* 3. Convert the list below from Celsius to Farhenheit, using the map function
// # F = (9/5)*C + 32
places =  [{name: 'Nashua', temperature: 32},{name: "Boston", temperature: 12},{name: "Los Angelos", temperature: 44,},{name: "Miami", temperature: 29}];
// Output: [('Nashua', 89.6), ('Boston', 53.6), ('Los Angelos', 111.2), ('Miami', 84.2)]



const farhenheit = function (place) {
    const tempF = (9/5) * place.temperature + 32;
    place.temperature = tempF;
    return place;
}

console.log(places.map(farhenheit))

//* 4. Write a recursion function to perform the fibonacci sequence up to the number passed in.
//? You don't need to log out 'iteration 0' etc if you don't want to. 
//? Just log the final values for each iteration
// Output for fib(5) =>
// Iteration 0: 1
// Iteration 1: 1
// Iteration 2: 2
// Iteration 3: 3
// Iteration 4: 5
// Iteration 5: 8

n = 5;
  
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

for (let i = 1; i <= n + 1; i++) {
    console.log(fib(i));
}