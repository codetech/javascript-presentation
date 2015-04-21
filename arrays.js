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
// numbers is ['zero', 'one', 'two', 'shi', 'go']


/*
 * Delete
 */

numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']


/*
 * Enumeration
 */

var i;
for (i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
}


/*
 * Methods
 */

myArray.forEach(function (element) {
    console.log(element);
});


// Create an array of numbers.

var data = [4, 8, 15, 16, 23, 42];

// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a * b;
};

// Invoke the data's reduce method, passing in the
// add function.

var sum = data.reduce(add, 0); // sum is 108

// Invoke the reduce method again, this time passing
// in the multiply function.

var product = data.reduce(mult, 1);

// product is 7418880

// Give the data array a total function.
data.total = function () {
    return this.reduce(add, 0);
};

total = data.total(); // total is 108
