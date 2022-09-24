// Manipulate items in an array
// Map vs For Each vs For Loop
const originalArray = [
    'dogs',
    'cats',
    'fish',
    'ferrets',
    'snakes',
    'turtles'
];

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

console.log(arrayMadeWithMap);
console.log(arrayMadeWithForEach);
console.log(arrayMadeWithForLoop);