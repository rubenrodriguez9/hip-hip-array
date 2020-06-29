/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */
function challengeBanner(x){
  console.log(`*************** Challenge ${x} ****************`)
}

// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];
function span(arr){
  let i;
  for(i = 0;i < arr.length; i++){
    console.log(arr[i])
  }
}

span(students)
console.log('')
challengeBanner(1)
console.log('')
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

function backwardo(arr){
  let i;
  for(i = arr.length - 1;i >= 0;i--){
    console.log(arr[i])
  }
}
backwardo(grades)
console.log('')
challengeBanner(2)
console.log('')
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
function evenNumbers(arr){
  let i;
  for(i = 0;i < arr.length;i++)
  if(arr[i] % 2 === 0){
    console.log(arr[i])
  }
}

evenNumbers(positiveNumbers)
console.log('')
challengeBanner(3)
console.log('')
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
function evenAndNeg(arr){
  let i;
  for(i = 0;i < arr.length;i++)
  if(arr[i] % 2 === 0 || arr[i] < 0){
    console.log(arr[i])
  }
}
evenAndNeg(mixedSignNumbers)
console.log('')
challengeBanner(4)
console.log('')
// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.shift();
symmetricalCapitals.shift();
function loggem(arr){
  let i;
  for(i = 0;i < arr.length - 1; i++){
    console.log(arr[i])
  }
}
loggem(symmetricalCapitals)
console.log('')
challengeBanner(5)
console.log('')
// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers.unshift(.5)
fibonacciNumbers.push(26)
fibonacciNumbers.push(52)

function logged(arr){
  let i;
  for(i = 0;i < arr.length; i++){
    console.log(arr[i])
  }
}

logged(fibonacciNumbers)
console.log('')
challengeBanner(6)
console.log('')
// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
let thingsILike = ['Cowboy Bebop', 'Lucy', 'Ninja Scroll', 'The Matrix', 'Firefly']

logged(thingsILike)
console.log('')
challengeBanner(7)
console.log('')
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
let otherThingsILike =[];
otherThingsILike.push('Fist of The North Star');
otherThingsILike.push('Akira');
otherThingsILike.push('Battlestar Galactica');
otherThingsILike.push('See');
otherThingsILike.push('Nehruvian Doom');

logged(otherThingsILike)
console.log('')
challengeBanner(8)
console.log('')
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
function looped(arr){
  let i;
  for(i = 3;i <= 10; i++){
    console.log(arr[i])
  }
}

console.log(looped(students))







challengeBanner(9)
// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
let mimic = []

let i;
for(i = 3;i < 11; i++){
  mimic.push(students[i]);
}


console.log(mimic)




console.log('')
challengeBanner(10)
console.log('')
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
let studentsCopy = students.slice(3, 11)

console.log(studentsCopy)



console.log('')
challengeBanner(11)
console.log('')
// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

console.log(dinosaurs.splice(4,3))



console.log('')
challengeBanner(12)
console.log('')
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log(dinosaurs.join('*'))



console.log('')
challengeBanner(13)
console.log('')
// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
dinosaurs.reverse();
console.log(dinosaurs)

console.log('')
challengeBanner(14)
console.log('')
// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

let combined;

combined = primaries.concat(secondaries);

function loggedOut(arr){
  let i;
  for(i = 0;i < arr.length;i++)
  console.log(arr[i])
}

loggedOut(combined)
console.log('')
console.log(primaries)
console.log('')
console.log(secondaries)
console.log('')
challengeBanner(14)
