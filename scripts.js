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

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems); // Turns listItems into a normal array
console.log(arrayListItems);