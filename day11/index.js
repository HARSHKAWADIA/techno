let arr = [10, 20, 30, 40, 50];

//let filteredarr = arr.filter((item) => item>30);

//console.log(filteredarr)

//reduce

//let sum = arr.reduce((acc,curr)=>acc+curr);

//    acc     curr
//    0       10      10 
//    10      20      30
//    30      30      60
//    60      40      100
//    100     50      150


//let sum = arr.reduce((acc,curr)=>{return acc+curr;},1000)

//    acc      curr
//    1000      10      1010 
//    1010      20      1030
//    1030      30      1060
//    1060      40      1100
//    1100      50      1150

//console.log(sum);

//let arr = [10,20,30,40,50];

//let founditem = arr.find((item) => item>30);

//console.log(founditem);

//let foundelementindex = arr.findIndex(item=>item>30);

//console.log(foundelementindex);

// let haseven = arr.some((item)=>item%2==0);

// console.log(haseven)

//let haseven = arr.every((item)=>item%2==0);

//console.log(haseven)

//object method

// let obj = {
//     firstname: "harsh",
//     lastname: "kawadia"
// }

// // let keys = Object.keys(obj)
// // console.log(keys);

// // let values = Object.values(obj)
// // console.log(values);

// let entries = Object.entries(obj)
// console.log(entries);


// // obj.freeze(obj)
// // obj.firstname="vinay";
// // console.log(obj);

// const object1 = {
//     firstname: "harsh",
//     lastname: "kawadia"
// }
// object1.firstname = "ram";
// console.log(object1);
// //we can initialize variables in the const object but we cant change the value of const object

// let obj = {
//     firstname:"harsh",
//     lastname:"kawadia"
// }
// Object.seal(obj);//in seal new propertise can be added
// obj.firstname ="harsh"
// obj.lastname="kawadia"
// console.log(obj);

//string mehtods

//let str="hello"
//  let char =str.charAt(7);
//  console.log(char);
//  let newStr= str.concat(" techno");
//  console.log(newStr);
// let hasworld=str.includes("world");
// console.log(hasworld);
// let index= str.indexOf("o");
// console.log(index);

//  let str = "hello world";
//  let scliedstr = str.slice(6,11)
//  console.log(scliedstr)

//  let substr = str.substring(4,8)
//  console.log(substr)


//  let substr = str.substring(4,8)
//  console.log(substr)

//let str = "hello world";
// let scliedstr = str.toLowerCase();
//let scliedstr = str.toUpperCase();
//console.log(scliedstr)

// let str = "hello world";

// let newstr = str.replace("world","techno");
// console.log(newstr);

// let newstrr = str.replace(2);
// console.log(newstrr);

// let num = 10.599;
//console.log(Math.round(num))

//let num;
//console.log(Math.random(num))

// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));

//function generatorotp(){}

let otp = Math.floor(1000 + Math.random()*10000) //1000 - 9999
console.log(otp)