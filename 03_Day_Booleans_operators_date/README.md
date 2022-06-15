# 30_Days_Of_JavaScript


## 💻 Day 3: Exercises

### Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
```js
let firstName  = 'Abdulrahman'; 
let lastName = 'Gaoba';
let country = 'Yemen';
let city = 'Almahweet';
let age = 24;
let isMarried =false;
let year = 2022;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(isMarried));
console.log(typeof(year));
```

```js
let AbdulrahmanObject = {
    firstName : "Abdulrahman",
    lastName : 'Gaoba',
    country : 'Yemen',
    city :'Almahweet',
    age : 24,
    isMarried :false,
    year :2022
}

    console.log(typeof(AbdulrahmanObject.firstName));
    console.log(typeof(AbdulrahmanObject.lastName));
    console.log(typeof(AbdulrahmanObject.country));
    console.log(typeof(AbdulrahmanObject.city));
    console.log(typeof(AbdulrahmanObject.isMarried));
    console.log(typeof(AbdulrahmanObject.year));
 ```

2. Check if type of '10' is equal to 10
```js
let str = '10';
let num = 10;
console.log(typeof (str) == typeof(num));
```


3. Check if parseInt('9.8') is equal to 10
```js
console.log(parseInt ('9.8') == parseInt(10));
```

4. Boolean value is either true or false.
   - Write three JavaScript statement which provide truthy value.
```js
        let x = true;
        let y = 1;
        let z = "true";
        if(x||y||z){
            console.log("This is a truthy value");
        }else{
            console.log("This is a falsy value");
        }
```

   - Write three JavaScript statement which provide falsy value.
```js    
        let m = false;
        let n = 0;
        let t = NaN;
        let e = "";
        let r = null;
        let q = undefined;
        if(m||n||e||t||r||q){
            console.log("This is a truthy value");
        }else{
            console.log("This is a falsy value");
        }
```

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
```js
    console.log(4 > 3)          //true    
    console.log(4 >= 3)         //true
    console.log(4 < 3)          //false
    console.log(4 <= 3)         //false
    console.log(4 == 4)         //true
    console.log(4 === 4)        //true    
    console.log(4 != 4)         //false
    console.log(4 !== 4)        //false    
    console.log(4 != '4')       //false    
    console.log( 4 == '4')      //true    
    console.log( 4 === '4')     //false   
```


   Find the length of python and jargon and make a falsy comparison statement.
```js
    console.log('paython'.length ==  'jargon'.lenght);
```

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
```js
     console.log(4 > 3 && 10 < 12)              //true                          
     console.log(4 > 3 && 10 > 12)              //false                   
     console.log(4 > 3 || 10 < 12)              //true                   
     console.log(4 > 3 || 10 > 12)              //true                        
     console.log(!(4 > 3))                      //false                      
     console.log(!(4 < 3))                      //true            
     console.log(!(false))                      //true
     console.log(!(4 > 3 && 10 < 12))           //false                
     console.log(!(4 > 3 && 10 > 12))           //true                    
     console.log( !(4 === '4'))                 //true  
      
     //There is no 'on' in both dragon and python
    let paythonWord = "paython";
    let dragonWord = "dragon";
    let paythonWordIncludeOn = paythonWord.includes('on'); 
    let dragonWordIncludeOn = dragonWord.includes('on'); 
    console.log(dragonWordIncludeOn && paythonWordIncludeOn)
```

7. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?

```js
        let data = new Date();
        console.log(data.getFullYear());
        console.log(data.getMonth());
        console.log(data.getDate());
        console.log(data.getDay());
        console.log(data.getHours());
        console.log(data.getMinutes());
```

   - Find out the numbers of seconds elapsed from January 1, 1970 to now.
```js
            console.log(Math.floor(data.getTime() / 1000));
```



 ### Exercises: Level 2
 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
  ```sh
     Enter base: 20
     Enter height: 10
     The area of the triangle is 100
```

```js
        let base = prompt('Enter number');
        let height = prompt('Enter number');
        let area = 0.5 * height * base;
        console.log(area);
```

2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
```sh
     Enter side a: 5
     Enter side b: 4
     Enter side c: 3
     The perimeter of the triangle is 12
```

```js
        let a = prompt('Enter number');
        let b = prompt('Enter number');
        let c = prompt('Enter number');
        let perimeter = +a + +b + +c;
        console.log(perimeter);
```

3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
```js
        let lengthOfRectangle = prompt('Enter number');
        let widthOfRectangle = prompt('Enter number');
        let areaOfRectangle = lengthOfRectangle * widthOfRectangle;
        let perimeterOfRectangle = 2 * (lengthOfRectangle * widthOfRectangle);
        console.log(areaOfRectangle)
        console.log(perimeterOfRectangle);
```

4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
```js
        let radius = prompt('Enter number');
        const pi = 3.14;
        let areaOfCircle = pi * radius * radius;
        let circumference = 2*pi*radius;
        console.log(areaOfCircle);
        console.log(circumference);
```
 
 
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
7. Compare the slope of above two questions.
8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the perso
  ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
  ```

```js
    let hours = Number(prompt("Enter hours:"));
    let rate = Number(prompt("Enter rate per hour:"));
    let pay = hours * rate;
    console.log(`Your weekly earning is ${pay}`)
```
  
  
10. If the length of your name is greater than 7 say, your name is long else say your name is short.
```js
    let firstName = "Abdulrahman";
    let lastName ="Gaoba";
    if(firstName.length > lastName.length){
        console.log("your name is long")
    }else{
        console.log("your name is short")
    }
```

11. Compare your first name length and your family name length and you should get this outpu
    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

 ```sh
     Your first name, Asabeneh is longer than your family name, Yetayeh
 ```
   
 12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge
  
 ```js
    let myAge = 250
    let yourAge = 25
 ```
 
 ```sh
    I am 225 years older than you.
 ```
 
 ```js
        let myAge = 24;
        let yourAge = prompt("Enter your age:");
        if (yourAge > myAge) {
             console.log(`You are ${yourAge} years older than you`);
        } else {
             console.log(`I am ${myAge} years older than you`);
        }
 ```
 
 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

 ```sh
     Enter birth year: 1995
     You are 25. You are old enough to driv
     Enter birth year: 2005
     You are 15. You will be allowed to drive after 3 years.
 ```
  
 ```js
         let age = prompt("Enter birth year:");
        let date = new Date();
        let yourAge = date.getFullYear() - age;
        if (yourAge > 18) {
             console.log("You are old enough to drive");
        } else {
             console.log(`you are ${yourAge}, you will be allowed to drive after ${yourAge - 18} years`);
        }
 ```
 
 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

  ```sh
    Enter number of years you live: 100
    You lived 3153600000 seconds.
 ```

```js
        let age = prompt('Enter number of years you live:');
        let ageInSeconds = 3153600; // 365 * 24 * 60 * 60
        let yourAge = age * ageInSeconds;
        console.log(`You lived ${yourAge} seconds`); 
   ```
    
 15. Create a human readable time format using the Date time object
```js
        let humanDate = new Date();
        let year = humanDate.getFullYear();
        let month =(humanDate.getMonth() + 1).toString().padStart(2, "0");
        let date = humanDate.getDate().toString().padStart(2, "0");
        let hour = humanDate.getHours();
        let minute = humanDate.getMinutes();
        let second = humanDate.getSeconds();
```
   - YYYY-MM-DD HH:mm
```js
        console.log(`${year}-${month}-${date}  ${hour}:${minute}`);//2022-06-15  12:08
```  

   - DD-MM-YYYY HH:mm
```js
         console.log(`${date}-${month}-${year}  ${hour}:${minute}`);//15-06-2022  12:08
```
   - DD/MM/YYYY HH:m
```js
        console.log(`${date}/${month}/${year}  ${hour}:${minute}`);//15/06/2022  12:08
```

 ### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
 . YYY-MM-DD HH:mm eg. 20120-01-02 07:05
```js
        console.log(`${year}-${month}-${date}  ${hour}:${minute}:${second}`); //2022-06-15  12:08:04
```    
