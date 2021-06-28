"use strict";

// Call and Apply methods
const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, "Abdulhakeem Dahir");
lufthansa.book(635, "John Smith");
console.log(lufthansa.bookings);

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings.bookings);

//Apply Method
const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);

book.call(eurowings, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
bookEW(567, "Steven Williams");
const bookEW23 = book.bind(eurowings, 293);
bookEW23("Jessica Chapman");

// Bind method with event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

// document
// 	.querySelector(".buy")
// 	.addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(23));

// Function returning function

const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};
const addVAT2 = addTaxRate(0.5);
// console.log(addTaxRate(0.1));

console.log(addVAT2(500));

// Default parameters

// const bookingArr = [];
// const createBooking = function (
// 	flightNum,
// 	numPassengers = 1,
// 	price = 199 * numPassengers
// ) {
// 	//ES5
// 	//   numPassengers = numPassengers || 1;
// 	//   price = price || 199;
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookingArr.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2);
// createBooking("LH123", undefined, 2);

// Passing Arguments

// const flight = 'LH234';
// const abdul = {
//   name: 'Abdulhakeem Dahir',
//   passport: 234230848324,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'Lh789';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 234230848324) {
//     alert('Check In Successful');
//   } else {
//     alert('Wrong Passport');
//   }
// };
// // checkIn(flight, abdul);
// console.log(flight);
// console.log(abdul);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(abdul);

// First Class and Higher Order Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // HIgher Order Function
// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed string: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet("Hey");

// console.log(greeterHey);

// greeterHey("Abdul");

// greet("Hello")("Abdul");
