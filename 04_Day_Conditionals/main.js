

 //### Exercises: Level 1

 // 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

     let input = prompt('Enter your age:')
     let wait = Math.abs(input - 18);
     if(input >= 18){
         console.log('You are old enough to drive');
     }else{
       console.log(`You are left with ${wait} years to drive.`);
     }

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

    let myAge = 24;
    let yourAge = prompt("Enter your age:");
    if (myAge > yourAge) {
      console.log(`I am ${myAge} years old. I am older than you`);
    } else {
      console.log(`You are ${yourAge} years old. You are older than me`);

    }
//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

      let a = prompt("Enter a Number:");
      let b = prompt("Enter a Number:");
      if(a > b){
             console.log(`${a} is greater than ${b}`)
     }
      else{
           console.log(`${b} is greater than ${a}`)
     }

// 1. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

     let a = prompt("Enter a Number:");
     if(a % 2 == 0){
         console.log(`${a} is an even number`)
     }
     else{
       console.log(`${a} is is an odd number`)
     }


// ### Exercises: Level 2

// 1. Write a code which  can give grades to students according to theirs scores:

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
         console.log('your grade is F') 
       default:
        console.log('your score is not correct');
     }





// 1. Check if the season is Autumn, Winter, Spring or Summer.

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
// 1. Check if a day is weekend day or a working day. Your script will take day as an input.

    let weekendDay = prompt("enter weekDay to check if it's a weekend")
    if (weekendDay == "Saturday" || weekendDay == "Sunday") {
        console.log(`${weekendDay} is a weekend day`);
    } else if (weekendDay == "Monday" || weekendDay == "Tuesday" || weekendDay == "Wednesday" || weekendDay == "Thursday" || weekendDay == "Friday") {
        console.log(`${weekendDay} is a work day`);
    } else {
        console.log("Please write it correctly");
    }


// ### Exercises: Level 3

// 1. Write a program which tells the number of days in a month.

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
    case "febuary":
        console.log(`${month} has 29 days`)
        break;
    default:
        console.log("Please write it correctly");
}


