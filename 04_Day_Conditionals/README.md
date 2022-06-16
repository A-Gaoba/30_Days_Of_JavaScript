# 30_Days_Of_JavaScript


### Exercises: Level 1

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```
   
   ```js
    let input = prompt('Enter your age:')
    let wait = Math.abs(input - 18);
    if(input >= 18){
        console.log('You are old enough to drive.');
    }else{
      console.log(`You are left with ${wait} years to drive.`);
    }
   ```

1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```
   ```js
   let myAge = 24;
   let yourAge = prompt("Enter your age:");
   if (myAge > yourAge) {
      console.log(`I am ${myAge} years old. I am older than you!`);
   } else {
       console.log(`You are ${yourAge} years old. You are older than me!`);
   }
   ```

1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

   ```js
   
    let a = prompt("Enter a Number:");
    let b = prompt("Enter a Number:");
    if(a > b){
        console.log(`${a} is greater than ${b}`)
    }
    else{
      console.log(`${b} is greater than ${a}`)
    }

   ```
1. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```
    
    ```js
     let a = prompt("Enter a Number:");
     if(a % 2 == 0){
         console.log(`${a} is an even number`)
     }
     else{
       console.log(`${a} is is an odd number`)
     }
    ```

### Exercises: Level 2

1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F

  ```js
let score = prompt('enter your scores:');
switch(true){
      case(score >= 90 && score < 100):
         console.log('your grade is A');
         break;
      case(score >= 70 && score < 90):
         console.log('your grade is B');
         break;
      case(score >= 60 && score <= 70):
         console.log('your grade is C');
         break;
      case(score >= 50 && score < 60):
         console.log('your grade is D');
         break;
      case(score > 0 && score < 50):
         console.log('your grade is F');
         break;
      default:
         console.log('your score is not correct');
}

  ```
 
2. Check if the season is Autumn, Winter, Spring or Summer.
  - If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer

   ```js
   let month = prompt("enter month to check seasons");
   switch (month) {
      case "September":
      case "October":
      case "November":
        console.log("the season is Autumn");
        break;
      case "December":
      case "January":
      case "Jebuary":
        console.log("the season is Winter");
        break;
      case "March":
      case "April":
      case "May":
        console.log("the season is Spring");
        break;
      case "June":
      case "July":
      case "August":
        console.log("the season is Summer");
        break;
      default:
        console.log("invalid Month")
      }
   ```
 - Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```
   ```js
   let weekendDay = prompt("enter weekDay to check if it's a weekend")
   if (weekendDay == "Saturday" || weekendDay == "Sunday") {
       console.log(`${weekendDay} is a weekend day`);
   } else if (weekendDay == "Monday" || weekendDay == "Tuesday" || weekendDay == "Wednesday" || weekendDay == "Thursday" || weekendDay == "Friday") {
       console.log(`${weekendDay} is a work day`);
   } else {
       console.log("Please write it correctly");
   }
   ```
### Exercises: Level 3

1. Write a program which tells the number of days in a month.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```
  
  ```js
  
let month = prompt("Enter name of month to check number of days");
switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`${month} has 31 days`)
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`${month} has 30 days`)
        break;
    case "Febuary":
        console.log(`${month} has 29 days`)
        break;
    default:
        console.log("Please write it correctly");
}

  ```

1. Write a program which tells the number of days in a month, now consider leap year.
```js
   
let month = prompt("Enter name of month to check number of days");
switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`${month} has 31 days`)
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`${month} has 30 days`)
        break;
    case "Febuary":
        console.log(`${month} has 28 days`)
        break;
    default:
        console.log("Please write it correctly");
}

```
