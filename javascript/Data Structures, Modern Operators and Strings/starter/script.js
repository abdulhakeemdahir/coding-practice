'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Rest is on the left hand side, spread on the right hand of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 1?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Spread works on Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';

// console.log(restaurantCopy);

// // Spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Use case of spread operator: create shallow copy of array and merge arrays

//Copy arrays
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// //Iterables can be used with spread
// const str = 'Jonas';
// const letters = [...str, ' ', 's.'];

// console.log(letters);

//

// // Destructuring Objects
// const { name, categories, openingHours } = restaurant;
// console.table(name, categories, openingHours);

// // Re-name objects properties
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Setting default value for Object destructuring
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating object variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested object destructuring
// const {
//   fri: { open: o, close: c },
// } = openingHours;
console.log(o, c);
//--------------------------------------------------------//

// Destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // How you would do switch items before ES6
// const temp = main;
// main = secondary;
// secondary = temp;

// // How you can use ES6 destructuring to switch variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function
// console.table(restaurant.order(2, 0));
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.table(starterCourse, mainCourse);

// // Nested array destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// const [k, , [q, u]] = nested;

// // Default values
// const [p = 1, o = 1, r = 1] = [8, 9];
