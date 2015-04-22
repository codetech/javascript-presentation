/*
 * Literals
 */

var empty_object = {};
var stooge = {
    firstName: "Jerome",
    lastName: "Howard"
};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};


/*
 * Retrieval
 */

stooge.firstName // "Joe"
flight.departure.IATA // "SYD"

stooge.middleName // undefined
flight.status // undefined
stooge.FIRST_NAME // undefined

var middle = stooge.middleName || "(none)";
var status = flight.status || "unknown";

flight.equipment // undefined
flight.equipment.model // throw "TypeError"
flight.equipment && flight.equipment.model // undefined


/*
 * Update
 */

stooge.firstName = 'Jerome';

stooge.middleName = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';


/*
 * Reference
 */

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object

var a = {};
var b = {};
var c = {};
// a, b, and c each refer to a
// different empty object

var object = {};
var a = object;
var b = object;
var c = object;
// a, b, and c all refer to
// the same empty object
