// Manipulate items in an array

const originalArray = [
    'dogs',
    'cats',
    'fish',
    'ferrets',
    'snakes',
    'turtles'
];

// Map vs For Each vs For Loop

// Map
const arrayMadeWithMap = originalArray.map(item => `This item is now in a long string: ${item}`);

// For Each
const arrayMadeWithForEach = [];
originalArray.forEach(item => arrayMadeWithForEach.push(`This item is now in a long string: ${item}`));

// For Loop
const arrayMadeWithForLoop = [];
for (i=0; i < originalArray.length; i++) {
    arrayMadeWithForLoop.push(`This item is now in a long string: ${originalArray[i]}`);
}

console.log(arrayMadeWithMap === arrayMadeWithForEach && arrayMadeWithMap === arrayMadeWithForLoop);

// Other manipulations

// Filter
const filteredArray = originalArray.filter(item => item !== 'fish')

//filters out fish from the original array
console.log(filteredArray)

// Reduce

const numbersArray = [0,1,2,3,4,5,6,7,8,9,10]
const reduction = numbersArray.reduce( (totalValue, currentValue) => totalValue + currentValue)

// adds all the numbers together
console.log(numbersArray)