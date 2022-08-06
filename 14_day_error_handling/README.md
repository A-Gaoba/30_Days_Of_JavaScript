# Day 14

## practice

```js
try {
  console.log("Start of try runs");

  unicycle;

  console.log("End of try runs -- never reached");
} catch (err) {
  console.log("Error has occured: " + err);
} finally {
  console.log("This is always run");
}

console.log("...Then the execution continues");

let json = '{ "age": 30 }';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e);
}
```

### for more details [here](#https://www.youtube.com/watch?v=cFTFtuEQ-10)
