/*
 * Literals
 */

var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
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

stooge["first-name"] // "Joe"
flight.departure.IATA // "SYD"

stooge["middle-name"] // undefined
flight.status // undefined
stooge["FIRST-NAME"] // undefined

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

flight.equipment // undefined
flight.equipment.model // throw "TypeError"
flight.equipment && flight.equipment.model // undefined


/*
 * Update
 */

stooge['first-name'] = 'Jerome';

stooge['middle-name'] = 'Lester';
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
