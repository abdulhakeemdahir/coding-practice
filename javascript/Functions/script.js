"use strict";
// Default parameters

const bookingArr = [];
const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	//ES5
	//   numPassengers = numPassengers || 1;
	//   price = price || 199;
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookingArr.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2);
createBooking("LH123", undefined, 2);

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
