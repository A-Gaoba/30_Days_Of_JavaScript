const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Use **_forEach_** to console.log each country in the countries array.
// countries.forEach((country) => {
//   console.log(country);
// });

// 4. Use **_forEach_** to console.log each name in the names array.
// names.forEach((name) => {
//   console.log(name);
// });

// 5. Use **_forEach_** to console.log each number in the numbers array.
// numbers.forEach((number) => {
//   console.log(number);
// });

// 6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
// const countriesInUpperCase = countries.map((country) => {
//   country.toUpperCase();
// });
// console.log(countriesInUpperCase);

// 7. Use **_map_** to create an array of countries length from countries array.
// countries.forEach((country) => {
//   console.log(country.length);
// });

// 8. Use **_map_** to create a new array by changing each number to square in the numbers array
// numbers.map((number) => console.log(number ** 2));

// 9. Use **_map_** to change to each name to uppercase in the names array
// names.map((name) => console.log(name.toUpperCase()));

// 10. Use **_map_** to map the products array to its corresponding prices.
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// products.map((product) => {
//   console.log(`{${product.product} , ${product.price}}`);
// });

// 11. Use **_filter_** to filter out countries containing **_land_**.
// const filtered = countries.filter((country) => {
//   return country.toLocaleLowerCase().includes("land");
// });
// console.log(filtered);

// 12. Use **_filter_** to filter out countries having six character.
// const filterByLength = countries.filter((country) => {
//   return country.length == 6;
// });
// console.log(filterByLength);

// 13. Use **_filter_** to filter out countries containing six letters and more in the country array.
// const filterByLen = countries.filter((country) => {
//   return country.length >= 6;
// });
// console.log(filterByLen);

// 14. Use **_filter_** to filter out country start with 'E';
// const nameStartWith_E = names.filter((name) => {
//   return name.startsWith("E");
// });
// console.log(nameStartWith_E);

// 15. Use **_filter_** to filter out only prices with values.
// const pro = products.filter((product) => {
//   return product.price;
// });
// console.log(pro);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists(arr) {
//   let string = arr.filter((elem) => typeof elem == "string");
//   return string;
// }
// console.log(getStringLists(["str1", 1, "str2", 3, 2, "str3"]));

// 17. Use **_reduce_** to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// 18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
const EuropeanCountries = countries.reduce((acc, cur) => {
  return acc + ", " + cur;
});
console.log(`${EuropeanCountries} are north European countries`);

// 19. Explain the difference between **_some_** and **_every_**
// Every() method is used to check whether all the elements of the array satisfy the given condition or not.
// Some()  method is used to check whether at least one of the elements of the array satisfies the given condition or not.
// The only difference is that the some() method will return true if any predicate is true while every() method will return true if all predicates are true.

// 20. Use **_some_** to check if some names' length greater than seven in names array
const nameGretterThan7 = names.some((name) => name.length > 7);
console.log(nameGretterThan7);

// 21. Use **_every_** to check if all the countries contain the word land
countriesContainLand = countries.every((country) =>
  country.toLocaleLowerCase().includes("land")
);
console.log(countriesContainLand);

// 22. Explain the difference between **_find_** and **_findIndex_**.
// FindIndex returns the index of the first element
// FindIndex returns the first element.

// 23. Use **_find_** to find the first country containing only six letters in the countries array
const found = countries.find((contry) => contry.length == 6);
console.log(found);

// 24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
const foundIndex = countries.findIndex((contry) => contry.length == 6);
console.log(foundIndex);

// 25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
const foundNoway = countries.findIndex((contry) => contry === "Norway");
console.log(foundNoway);

// 26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.
const foundRussia = countries.findIndex((contry) => contry === "Russia");
console.log(foundRussia);
