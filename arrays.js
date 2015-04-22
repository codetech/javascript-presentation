/*
 * Literals
 */

var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];
empty[1] // undefined
numbers[1] // 'one'
empty.length // 0
numbers.length // 10


/*
 * Length
 */

var myArray = [];
myArray.length // 0
myArray[1000000] = true;
myArray.length // 1000001
// myArray contains one property.

numbers.length = 3;
// numbers is ['zero', 'one', 'two']

numbers.push('go');
// numbers is ['zero', 'one', 'two', 'go']


/*
 * Delete
 */

numbers.splice(2, 1);
// numbers is ['zero', 'one', 'go']


/*
 * Enumeration
 */

for (var i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}


/*
 * Methods
 */

numbers.forEach(function (element) {
    console.log(element);
});


// Create an array of numbers.

var data = [4, 8, 15, 16, 23, 42];

// Create a function for squaring numbers.

var square = function (a) {
    return a * a;
};

var squares = data.map(square);

// squares is [16, 64, 225, 256, 529, 1764]

// Invoke the data's reduce method, passing in the
// add function.

var sum = data.reduce(function (a, b) {
    return a + b;
}, 0); // sum is 108

// Invoke the reduce method again, this time passing
// in the multiply function.

var product = data.reduce(function (a, b) {
    return a * b;
}, 1); // product is 7418880
