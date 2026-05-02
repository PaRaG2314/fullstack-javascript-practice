console.log("hello javascript is connected");  //prints in console, rightclick-> inspect-> console 
document.writeln("javascript is connected");   //prints in html webpage

//let x = 10      //let does not allow repetetion of variable but allows changing values, used in modern javascript
//console.log(x)

//var y = 20      // var is no longer used in modern javascript
//var y = 25      //var allows multiple variables but prints only the latest value
//console.log(y) 

//const z = 30   //const does not allow repetetion of variable, gives error
//const z = 40
//console.log(z)

//--------------------------------------------------------------------------------------------------\\
//DATA TYPES:

//1. Primitive-->
//let a = "10"  //string
//console.log(typeof(a))   //typeof: prints the data type

//let a = 10   //number
//console.log(typeof(a))

//let a = true   //boolean
//console.log(typeof(a))

//let a = null   //object
//console.log(typeof(a))

//let a;   //undefined
//console.log(typeof(a))

//--------------------------------------------------------------------------------------------------\\
//ARITHMATIC OPERATORS--> (+, -, *, /, %, **)

//let a = 10;
//let b = 5;
//console.log(a+b) //method 1

//let a = 10;
//let b = 5;
//let c = a-b     //method 2
//console.log(c) 

//let a = 10;
//let b = 5;
//console.log(a**b)   //a to the power b

//--------------------------------------------------------------------------------------------------\\
//ASSIGNMENT OPERATORS-->
//let a = 10;
//let b = 5; 
//console.log(a+=b)   //because "let" was used, values updates after this 
//console.log(a)      //a prints 15
//console.log(b)      //but b prints 5

//--------------------------------------------------------------------------------------------------\\
//LOGICAL OPERATORS--> [AND(&&), OR(||), NOT(!)]

//let a = 10;
//let b = 5;
//console.log(a==10 && b==5)      //AND operator prints true when all conditions are true else false
//console.log(a==10 || b==15)     //OR operator prints true when atleast one condition is true
//console.log(a!=10)              //NOT operator prints the opposite 

//comparison operators
// (< , >, <=, >=, ==, === , !=, !==)

// let a = 10
// let b = "10"
// console.log(a<b)
// console.log(a>b)
// console.log(a>=b)
// console.log(a<=b)

// console.log(a==b)
// console.log(a===b)
// console.log(a!==b)

//increment and decrement operators

// console.log(++a)//pre increment
// console.log(a++)//post increment
// console.log(a)

// let age = 17
// if(age>=18){
//     console.log("you are eligible")
// }else{
//     console.log("not eligible")
// }
//--------------------------------------------------------------------------------------------------\\


// let score = 34
// if(score>=90){
//     console.log("Grade A")
// }
// else if(score>=80){
//     console.log("grade B")
// }
// else if(score>=70){
//     console.log("grade c")
// }
// else if(score>=60){
//     console.log("grade d")
// }
// else if(score>=50){
//     console.log("grade e")
// }
// else{
//     console.log("fail")
// }


//let score = prompt("enter your number")
//if(score>=90){
//    alert("Grade A")
//}
//else if(score>=80){
//    alert("grade B")
//}
//else if(score>=70){
//    alert("grade c")
//}
//else if(score>=60){
//    alert("grade d")
//}
//else if(score>=50){
//    alert("grade e")
//}
//else{
//    alert("fail")
//}
//--------------------------------------------------------------------------------------------------\\

// for(let x = 4; x<=10; x++){
//     console.log(x)
// }

//while loop

// let x= 1
// while(x<=7){
//     console.log(x)
//     x++
// }

//do-while

// let x = 10
// do{
//     console.log("loop will run atleast once even if the condition is false")
// }while(x<5)


// for(x=1; x<=10; x++){
//     if(x==4 || x==7){
//         continue;
//     }
//     console.log(x)
// }

// for(x=1; x<=10; x++){
//     if(x==6){
//         break;
//     }
//     console.log(x)
// }

//--------------------------------------------------------------------------------------------------\\

//ARRAYS--> can hold multiple values in a single variable

//1. Index Array:
//let fruits=["apple", "mango", "orange"]
//console.log(fruits[1]) //indexing: value calling

//2. Associative Array:
//let student= {
//    name:"Parag",
//    age:"22",
//    course:"python"
//} //sorts alphabetically by default
//console.log(student.name) //key calling 

//3. Multi-dimensional Array:
//let number=[
//    [1,2,3], // 0 index element [inside indexing also]
//    [4,5,6], // 1 index element []
//    [7,9]    // 2 index element []
//]
//console.log(number[1][2]) // 1st [] is for the element, 2nd [] is for the elements inside the [] within 
//let number = [   
//    [   // 0 
//        [1,2,3], 
//        [4,5,6], 
//        [7,8,9]    
//    ],
//    [   // 1
//        ["apple", 10, "abc"], // 0
//        [true, false, null],  // 1
//        [11, 12, 13]          // 2
//        //  0    1    2  (index positions inside this block)
//    ],
//    [   // 2
//        [14,15,16],
//        ["def", "ghi", "xyz"],
//        [17, "new", "car"]
//   ]
//];
//console.log(number[1][2][1]); // Output: 12

//let fruits=["apple", "mango", "orange"]
//fruits.pop()
//fruits.push("abc")
//fruits.shift()
//fruits.unshift("def")
//console.log(fruits)

//--------------------------------------------------------------------------------------------------\\

//FUNCTIONS-->
//syntax:
//function myMessage(){       //Camel Case words, second word starts with capital letter 
//    console.log("hello this is my new function")
//}
//myMessage()  //call the function, can be done multiple times

//Function with parameters
//function abc(x,y){
//   console.log( x + y)   
//}
//abc(4, 5)
//abc(10, 5)

//Function with Return values
//function multiply(a,b){
//    return a*b
//}
//let result = multiply(10,2)
//console.log(result)

//FUNCTION EXPRESSION
//let hello = function(){      //there is no fucntion but a variable
//    console.log("this is function expression")
//}
//hello()  //variable call

//ARROW FUNCTION [=>]
//let square = (a,b) => {
//    return a*b
//}
//console.log(square(10,4))
//--------------------------------------------------------------------------------------------------\\
