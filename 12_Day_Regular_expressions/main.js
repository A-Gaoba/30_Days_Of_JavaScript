// ## 💻 Exercises : Day 12

// ### Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text.

let text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;

let income = text
  .match(/\d+/g)
  .map((x) => parseFloat(x))
  .reduce((acc, cur) => acc + cur, 0);
console.log(income);

// 1. The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

// ```js
points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
distance = 12;
//  ```

let numPattern = new RegExp(/\-?[0-9]+/, "g");
let extractedPoints = points
  .map((x) => parseFloat(x.match(numPattern)[0]))
  .sort((a, b) => a - b);

let distance = Math.abs(
  extractedPoints[0] - extractedPoints[extractedPoints.length - 1]
);
