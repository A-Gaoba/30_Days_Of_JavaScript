// ## Exercises : Day 13

// ### Exercises:Level 1

let countries = ["Yemen", "Syria", "Egypt", "Sudia"];
let obj = { 1: "Yemen", 2: "Egypt", 3: "Syria", 4: "Sudia" };
// 1.  Display the countries array as a table

// console.table(countries);

// 2.  Display the countries object as a table

// console.table(obj);

// 3.  Use console.group() to group logs

console.group("group");
console.log(countries);
console.log(obj);
console.groupEnd();

// ### Exercises:Level 2

// 1. 10 > 2 \* 10 use console.assert()
console.assert(10 > 2 * 10, `10 is not greater than ${2 * 10}`);

// 2. Write a warning message using console.warn()
console.warn("%cThis is a warning message", "color: yellow");

// 3. Write an error message using console.error()
console.error("%cThis is a error message", "color: red");

// ### Exercises:Level 3

// 1. Check the speed difference among the following loops: while, for, for of, forEach

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Regular for loop
console.time("For Loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd("For Loop");

// For of loop
console.time("for-of loop");
for (const elem of arr) {
  console.log(elem);
}
console.timeEnd("for-of loop");

// while loop
console.time(`While Loop`);
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.timeEnd("While Loop");

// For each loop
console.time("ForEach Loop");
arr.forEach((elem) => console.log(elem));
console.timeEnd(`ForEach Loop`);
