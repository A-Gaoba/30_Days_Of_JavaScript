## 💻 Exercises : Day 6

 ### Exercises: Level 1

   ```js
    const countries = [
      'Albania',
      'Bolivia',
      'Canada',
      'Denmark',
      'Ethiopia',
      'Finland',
      'Germany',
      'Hungary',
      'Ireland',
      'Japan',
      'Kenya'
    ]

    const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
    ]

    const mernStack = ['MongoDB', 'Express', 'React', 'Node']
   ```

1. Iterate 0 to 10 using for loop, do the same using while and do while loop
  ```js
      // for loop
     for(let i = 0; i <= 10; i++){
       console.log(i);
     }

    // while loop
    let index = 0;
    while(index <= 10){
       console.log(index);
       index++;
    }
  ```

2. Iterate 10 to 0 using for loop, do the same using while and do while loop
  ```js  
     //for loop
     for(let i = 10; i >= 0; i--){
       console.log(i);
     }

    //while loop
     let index = 10;
     while(index >= 0){
     console.log(index);
     index--;
     }
  ```

 3. Iterate 0 to n using for loop
  ```js
     let n = prompt('please inter a Number:');
     for(let i = 0; i <= n; i++){
       console.log(i);
     }
  ```

 4. Write a loop that makes the following pattern using console.log():

  ```js
     let rectangle = "";
     for (let i = 0; i < 7; i++) {
         rectangle = rectangle + "#";
         console.log(rectangle);
     }
  ```
  
  ```js
        #
        ##
        ###
        ####
        #####
        ######
        #######
   ```

 5. Use loop to print the following pattern:

    ```sh
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
    ```
  ```js
    let num = 0;
    for(let i = 0; i < 11; i++){
      num = i * i;
      console.log(`${i} * ${i} = ${num}`);
    }
  ```

 6. Using loop print the following pattern

    ```sh
     i    i^2   i^3
     0    0     0
     1    1     1
     2    4     8
     3    9     27
     4    16    64
     5    25    125
     6    36    216
     7    49    343
     8    64    512
     9    81    729
     10   100   1000
    ```
    ```js
     for(let i = 0; i < 11; i++){
       let squar = Math.pow(i,2);
       let cub = Math.pow(i,3);
       console.log(`${i}  |  ${squar}  |  ${cub}`);
     }
    ```

 7. Use for loop to iterate from 0 to 100 and print only even numbers
    ```js
       for(let i = 0; i<=100;i++){
           if(i%2 == 0){
             console.log(i);
           }
       }
    ```

 8. Use for loop to iterate from 0 to 100 and print only odd numbers
    ```js
       for(let i = 0; i<=100;i++){
         if(i%2 == 1){
           console.log(i);
         }
       }
    ```

 9. Use for loop to iterate from 0 to 100 and print only prime numbers
      ```js




      ```

 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
     ```sh
     The sum of all numbers from 0 to 100 is 5050.
     ```
     
     ```js
       let sum = 0 ;
       for(let i = 0; i<=100;i++){
           sum = sum +i;
         }
       console.log(`The sum of all numbers from 0 to 100 is ${sum}`); 
     ```

 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

     ```sh
     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
     ```
     ```js
       let sumEvens = 0
       for(let i = 0; i<=100;i++){
          if(i%2 == 1){
           sumEvens = sumEvens + i;
           }
       }
       console.log(`The sum of all numbers from 0 to 100 is ${sumEvens}`);
     ```

 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

     ```sh
       [2550, 2500]
     ```
     ```js
       let sumOdds = 0
       for(let i = 0; i<=100;i++){
          if(i%2 == 0){
           sumOdds = sumOdds + i;
           }
       }
       console.log(`The sum of all numbers from 0 to 100 is ${sumOdds}`);
       console.log(`[${sumEvens}, ${sumOdds}]`)

     ```

 13. Develop a small script which generate array of 5 random numbers
    
     ```js
      let randomNumbers = [];
      for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random()*10));
      }
      console.log(randomNumbers);

     ```
     
 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

     ```js
     let randomNumbers = [];
       for (let i = 0; i < 5; i++) {
         let num = (Math.floor(Math.random()*10));
         if(randomNumbers.indexOf(num) === -1)
         randomNumbers.push(num)
       }
       console.log(randomNumbers);

     ```

 15. Develop a small script which generate a six characters random id:

     ```sh
     5j2khz
     ```
     
     ```js
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

     let randomId = ' ';
     const charactersLength = characters.length;
     for ( let i = 0; i < 6; i++ ) {
       let random = characters.charAt((Math.random() * charactersLength));
       randomId = randomId + random;
     }
     console.log(randomId);
     ```
    
 ### Exercises: Level 2

 1. Develop a small script which generate any number of characters random id:

     ```sh
       fe3jo1gl124g
     ```

     ```sh
       xkqci4utda1lmbelpkm03rba
     ```
 let randomId = ' ';
 let randomNum = (Math.floor(Math.random()*10))
 const charactersLength = characters.length;
 for ( let i = 0; i < randomNum; i++ ) {
   let random = characters.charAt((Math.random() * charactersLength));
   randomId = randomId + random;
 }
 console.log(randomId);
 1. Write a script which generates a random hexadecimal number.

     ```sh
     '#ee33df'
     ```
     
     ```js
      const characters ='abcdef0123456789';
      let randomId = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < 6; i++ ) {
       let random = characters.charAt((Math.random() * charactersLength));
        randomId = randomId + random;
       }
      console.log(randomId);
    ```
 1. Write a script which generates a random rgb color number.

     ```sh
     rgb(240,180,80)
     ```
   ```
    const random = Math.floor(Math.random()*255);
    console.log(`rgb(${random}, ${random}, ${random})`);
   ```
 1. Using the above countries array, create the following new array.

     ```sh
     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    
    ```
  ```
   let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
    let newCountries = [];
    for (let i = 0; i < countries.length; i++) {
    newCountries.push([countries[i], countries[i].slice(0, 3), countries[i].length])
    }
    console.log(newCountries)

  ```
 1. Using the above countries array, create an array for countries length'.

     ```sh
     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
     ```

 1. Use the countries array to create the following array of arrays:

     ```sh
       [
       ['Albania', 'ALB', 7],
       ['Bolivia', 'BOL', 7],
       ['Canada', 'CAN', 6],
       ['Denmark', 'DEN', 7],
       ['Ethiopia', 'ETH', 8],
       ['Finland', 'FIN', 7],
       ['Germany', 'GER', 7],
       ['Hungary', 'HUN', 7],
       ['Ireland', 'IRE', 7],
       ['Iceland', 'ICE', 7],
       ['Japan', 'JAP', 5],
       ['Kenya', 'KEN', 5]
     ]
     ```

 2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

     ```sh
     ['Finland','Ireland', 'Iceland']
     ```

 3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

     ```sh
     ['Albania', 'Bolivia','Ethiopia']
     ```

 4. Using the above countries array, find the country containing the biggest number of characters.

       ```sh
       Ethiopia
       ```

 5. Using the above countries array, find the country containing only 5 characters.

     ```sh
     ['Japan', 'Kenya']
     ```

 6. Find the longest word in the webTechs array
 7. Use the webTechs array to create the following array of arrays:

     ```sh
     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
     ```

 8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
 9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
 10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
 11. Print all the elements of array as shown below.

     ```js
       const fullStack = [
         ['HTML', 'CSS', 'JS', 'React'],
         ['Node', 'Express', 'MongoDB']
       ]
     ````

     ```sh
       HTML
       CSS
       JS
       REACT
       NODE
       EXPRESS
       MONGODB
     ```

 ### Exercises: Level 3

 1. Copy countries array(Avoid mutation)
 1. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
 1. Sort the webTechs array and mernStack array
 1. Extract all the countries contain the word 'land' from the [countries array](https:github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
 1. Find the country containing the hightest number of characters in the [countries array](https:github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
 1. Extract all the countries contain the word 'land' from the [countries array](https:github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
 1. Extract all the countries containing only four characters from the [countries array](https:github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
 1. Extract all the countries containing two or more words from the [countries array](https:github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
 1. Reverse the [countries array](https:github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and capitalize each country and stored it as an array
