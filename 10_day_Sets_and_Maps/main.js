// ## Exercises

// ### Exercises:Level 1

// ```js
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
// ```

// 1. create an empty set
const empty = new Set();

// 2. Create a set containing 0 to 10 using loop
const number = new Set();
for (let i = 0; i <= 10; i++) {
  number.add(i);
}
console.log(number);

// 3. Remove an element from a set
const remove = number.delete(3);
console.log(remove);

// 4. Clear a set
const deleteAllElements = number.clear();
console.log(deleteAllElements);

// 5. Create a set of 5 string elements from array

const arr = ["str1", "str2", "str3", "str4", "str5"];
const setOfString = new Set(arr);
console.log(setOfString);

// 6. Create a map of countries and number of characters of a country

let mapOfCountries = new Map();
for (const country of countries) {
  mapOfCountries.set(country, country.length);
}
console.log(mapOfCountries);

// ### Exercises:Level 2

// 1. Find a union b

const union = [...a, ...b];
const union_A_B = new Set(union);
console.log(union_A_B);

// 2. Find a intersection b

let B = new Set(b);
let c = a.filter((elem) => B.has(elem));
let C = new Set(c);

console.log(C);

// 3. Find a with b

let result = a.filter((elem) => !B.has(elem));
let aDiffB = new Set(result);
const A_differ_b = aDiffB.forEach((x) => console.log(x));

// ### Exercises:Level 3

// 1. How many languages are there in the countries object file.
// let languagesCount = new Set(
//     countries.reduce((acc, cur) => {
//       acc = acc.concat(cur.languages);
//       return acc;
//     }, [])
//   ).size;
//   console.log(languagesCount);

// 1. \*\*\* Use the countries data to find the 10 most spoken languages:

// ```js
// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
];

//   // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))[
//   ({ English: 91 }, { French: 45 }, { Arabic: 25 })
// ];
// // ```
