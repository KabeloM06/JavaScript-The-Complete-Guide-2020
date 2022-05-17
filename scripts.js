// Arrays are index based, which starts at 0 ZERO. The length is max index + 1

const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(4, 5, 6);
console.log(moreNumbers);

// This method has a weird feature when passing in just one items as a number
// The single number will then be used to create an empty array with the number being the length of the array
const weirdNumbers = new Array(6);
console.log(weirdNumbers);

const noNewNumbers = Array(7, 8, 9); // This also has the weird length issues when passing just a number
console.log(noNewNumbers);

const yetMoreNumbers = Array.of(1, 2);

const listItems = document.querySelectorAll('li'); // This creates a node list
console.log(listItems);

const arrayListItems = Array.from(listItems); // Turns listItems into a normal array
console.log(arrayListItems);

/// Arrays can store numbers or strings
// The types don't have to be the same
// Can also have nested Arrays. Like data
// Array of arrays
// Can loop over arrays
// Ca have loops within loops
// just need to be careful that you use the array in a way that does  not break future code

const hobbies = ['Cooking', 'Soccer', 'Reading'];
const personalData = [30, 'Kabelo', {interests: []}];
const analyticsData = [[1, 3.5, 8], [-5, 8.3, 9.7]];

for (const data of analyticsData){
    for (const dataPoint of data){
        console.log(dataPoint);
    }
}