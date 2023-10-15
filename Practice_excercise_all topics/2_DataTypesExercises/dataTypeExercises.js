
//Number Data Types:

    // 1. Declare a variable called myNumber and assign it a number.

    const myNumber = 39;

    // 2. Create a variable myFloat and set it to a floating-point number.

    let myFloat = 372.99;

    // 3. Define a variable myNegativeNumber and set it to a negative number.

    let myNegativeNumber = -5;

    // 4. Declare a variable myNaN and set it to NaN (Not-a-Number).

    let myNaN = NaN;

    // 5. Create a variable myInfinity and set it to positive infinity.

    let myInfinity = Infinity;




// ____________________________________________________________________________________________________________________



   // String Data Type:

    // 6. Declare a variable myString and assign it a string of your choice.

    let myString = 'friend';
    
    // 7.Create another variable myAnotherString and set it to a different string.

    let myAnotherString = 'hello';


    // 8. Certainly! Here are 20 exercises focusing solely on different data types in JavaScript:


    

// ____________________________________________________________________________________________________________________



   //Boolean Data Type:

    // 9. Define a variable isTrue and set it to true.

    let isTrue = 'true';

   // 10. Declare a variable isFalse and set it to false.
   
    let isFalse = 'false';



// ____________________________________________________________________________________________________________________



    // Undefined and Null Data Types:

    // 10. Create a variable myUndefined and set it to undefined.

    let myUndefined = undefined;

    // 11. Declare a variable myNull and set it to null.
    
    let myNull = null;




// ___________________________________________________________________________________________________________________



   // Symbol Data Type (ES6 and above):

   // 12. Define a variable mySymbol and set it to a symbol using the Symbol() constructor.
   
   let mySymbol = Symbol('mysymbolDescription');




// ____________________________________________________________________________________________________________________



  //BigInt Data Type (ES11 and above):

  // 13. Declare a variable bigIntValue and set it to a BigInt value.

  let bigIntValue =1234567890123456789012345678901234567890;




// _________________________________________________________________________________________________________________________



  // Array Data Type:

 //1. Create an array called myArray and populate it with a few elements of different data types.
    
 let myArray = [2,"a",null];

 // 2.Define another array myEmptyArray without any elements.

 let myEmptyArray = [];

 //3.Create an array called fruits and fill it with the names of various fruits.
   
 let fruits = [`apple`, `banana` , `orange` , `mango`];

 // 4.Declare an array colors and populate it with the names of different colors.

 let colors = [`yellow` , `green` , `pink` , `blue` , `black` ];

 // 5.Define an array daysOfWeek and add the names of the days of the week in order.

 let day_of_week = [`sunday` , `monday` , `tuesday` , `wednesday` , `thusday` , `friday` , `saturday`];

 // 6. Create an array called numbers and fill it with a series of numerical values.

 let number = [1,2,3,4,5,6,7,8];

 // 7. Declare an array cities and populate it with the names of different cities.

 let cities = [`ujjain` , `dewas` , `indore` , `shajapur` , `bhopal`];


// _____________________________________________________________________________________________________________________________



 // Object Data Type:

 // 16. Declare an object myObject and add some key-value pairs of different data types.

  let myObject = {
    name: `deepak`,
    surname: `rajoriya`,
    isStudent: true,
    hobbies: [`reading` , `gaming`]

  }
  
 // 1. Create an empty object called myEmptyObject.

 let myEmptyObject = {};

 // 2. Create an object called person with properties for name, age, and city, and assign values to these properties.

   let person ={
    name:`deepak`,
    age:21,
    city: 'johnkar'
   };

  // 3. Define an object car with properties for make, model, and year, and assign values to these properties.

   let car = {
    make:`Toyota`,
    model:`Camry`,
    year : 2022
   };

   // 4. Create an object movie with properties for title, director, and releaseYear, and set values for these properties.

    let movie = {
        title:`kedarnath`,
        director : `Abhishek Kapoor`,
        releaseYear: 2018
    };

 // 5. Declare an object product with properties for name, price, and inStock, and assign values to these properties.

   let product ={
     name: "Laptop",
     price: 999.99,
     inStock: true
   }

 // ___________________________________________________________________________________________________________________________




 //Function Data Type:


 //1. Create a variable myFunction and set it to a function.

    function myFunction () {

    }

 // 2. Define another function mySecondFunction.

    function mySecondFunction (){

 }

 // 3. Create a function named add that takes two parameters, a and b, and returns their sum.
    
     function add(a,b){
 
      return a+b;

     }

 // 4.Declare a function named greet that takes a name as a parameter and returns a greeting message.

    function greet(name){
        return "hello" + name + "!";
    }
 
 // 5.Define a function named calculateArea that takes the width and height of a rectangle as parameters and returns the area of the rectangle.

 function calculateArea (width , height){

    return width*height;
 }

 // 6. Create a function called isEven that takes a number as a parameter and returns true if the number is even and false if it's odd.

  function isEven(number){

    return(num%2===0)
  }

// 7. Declare a function square that takes a number as a parameter and returns its square.

 function square(number){
    
    return number*number;
 }


  // __________________________________________________________________________________________________________________________



 //  Date Data Type:

 // 1. Declare a variable currentDate and set it to the current date using the Date object.

   let currentDate = new Date();
   console.log(currentDate);
  
 // 2. Create a variable currentDateTime and set it to the current date and time as a string in a specific format.

   let currentDateTime = new Date().toLocaleString();
   console.log(currentDateTime);

 // 3. Declare a variable currentYear and set it to the current year.

 let currentYear = new Date().getFullYear();
 console.log(currentYear);

 // 4 . Create a variable currentMonth and set it to the current month.

 let currentMonth = new Date().getMonth()+1; // (month+1 because in javascript month is start with 0)
 console.log(currentMonth);

 // 5. Define a variable currentDay and set it to the current day of the month.

 let currentDay = new Date().getDate();
 console.log(currentDay);

 // 6.Declare a variable currentDayOfWeek and set it to the current day of the week.

 let dayOfWeek = [`sunday`, `monday` , `tuesday` , `wednesday` , `thusday` , `friday` , `suturday`];
 let currentDayOfWeek = dayOfWeek[new Date().getDay()];
 console.log(currentDayOfWeek);
