//conditional statements, loops
// console.log(!10);
//if else,switch,ternary operators
//functions
//loops
// let count=20;
// if (count==20){
//     console.log("the count is 20");
// }
// else{
//     console.log("the count is not 20");
// }
// let count=20;
// if (count==20){
//     console.log("the count is 20");
// }
// else if (count>20){
//     console.log("the count is greater than 20");
// }
// else if (count<20){
//     console.log("the count is less than 20");
// }

// let firstnumber=prompt("enter the first number");
// console.log(firstnumber);
//prompt the user to enter their username and passoword
//if username is "admin" and passowrd is 123 in numbers
//if both condition is true then display "auth succwsful" else "auth failed"
// Prompt the user to enter their username and password

// let username = prompt("Enter your username:");
// let password = prompt("Enter your password:");

// // Check if the username is "admin" and the password is 123
// if (username == "admin" && password == "123") {
//     alert("auth successful");
// } else {
//     alert("auth failed");
// }

//ternory operater

//let count = 20;
//count === 20 ? console.log("the count is 20") : count > 20 ? console.log("the count is greater than 20 ") : console.log("the count is less than 20")

// let username = prompt("Enter your username:");
// let password = prompt("Enter your password:");

// (username === "admin" && password === "123") ? alert("auth succesful"):alert("auth failed");

// switch cond

// let daynumber=3;
// let dayname;
// switch (daynumber){

//     case 1:
//      dayname ="monday";
//      break;

//     case 2:
//     dayname ="tuesday";
//     break;

//     case 3:
//     dayname ="wednesday";
//     break;

//     case 4:
//     dayname ="thrusday";
//     break;

//     case 5:
//     dayname ="friday";
//     break;

//     case 6:
//     dayname ="saturday";
//     break;

//     case 7:
//     dayname ="sunday";
//     break;

//     default:
//     console.log("invalid number");

//     }
// console.log(dayname);



//  function

// function declaration 

// function sum(){
//     console.log("this is sum function");
// }

// sum();

// funcion expression
// const sum = function(){
//     console.log("This is function expression")
// }


//  arrow functions

// let sum = ()=>{
//     console.log("This is arrow function");
// }


// sum();

// let add = (a,b) =>a+b;

// let result = add (2,5);
// console.log(result);

// 2nd difference b/w var let const

// global scope / local scope
//Es6 - block scope

// var-global scope variable but in case of function it become local variable
// let $ const -block scope variable

// {
//     let  a = 20;
// }

// console.log(a);2

// {
//     var a = 20;
// }
// console.log(a)


//var

// {
//     var a = 20;
// }

// {
//     var a = "harsh";
// }

// console.log(a);


//let

// {
//     let a = 20;
// }

// {
//     let a = "harsh";
//     console.log(a);
// }

// function sum(){
//     var a = 10;
//     return(a);
// }
// console.log(a);

// array and objects

//let arr = [10, 20, 30, 40, 50];

// console.log(arr[3]);

//console.log(arr[arr.length - 1]);

let nestedarr = [10, 20, 30, [1, 2, 3, 4], [20, 30, 40,["aaa", "aab",[true,false]]]]
// let newarr1 = nestedarr[nestedarr.length -1];
// let newarr2 = newarr1[newarr1.length-1];
// let newarr3 = newarr2[newarr2.length-1];
// console.log(newarr3[0]);

//console.log(arr.length)

//arr[arr.length-1]="harsh";
// console.log(arr);

// objects

let obj ={
     "firstname" : "harsh",
     "lastname" : "kawadia"
}

console.log(obj);
