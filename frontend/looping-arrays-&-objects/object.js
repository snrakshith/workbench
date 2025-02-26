/**
 * For looping through Objects it becomes bit tricky as JS doesn't support
 * looping out of the box so,
 * - first we have to convert it to an array using any of the methods,
 *   based on choice
 *      - .keys()
 *      - .values()
 *      - .entires()
 * - Then we can use for...of loop
 *
 */

// const population = {
//   male: 4,
//   female: 93,
//   others: 10,
// };

// let genders = Object.keys(population);
// let genderValues = Object.values(population);
// let genderEntries = Object.entries(population);

// console.log(genders); // ["male","female","others"]
// console.log(genderValues); // [4, 93, 10];
// console.log(genderEntries); // [ [ 'male', 4 ], [ 'female', 93 ], [ 'others', 10 ] ]

// for (const key in population) {
//   console.log(`${key}: ${population[key]}`); // [4, 93, 10];
// }

// After converting we can use Array's for...of loop

// for (const key of genders) {
//   console.log("key", key); // [4, 93, 10];
// }

// for (const value of genderValues) {
//   console.log("value", value); // [4, 93, 10];
// }

// for ([key, value] of genderEntries) {
//   console.log(key, value);
// }

// let genders = Object.keys(population);

// let totalpopulation = 0;
// genders.forEach((element) => {
//   //   console.log(element);
//   totalpopulation += population[element];
// });

// console.log("total-population", totalpopulation);
