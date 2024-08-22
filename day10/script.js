// loops ,strict mode,console type,array

// for ,while ,do while 

//let count = 1;

// while(count <= 10){
//     console.log(count);
//     count++
// }


// do{
//     console.log(count);
//     count++
// }while(count<=5);


// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for(let i=10;i>0;i--){
//     console.log(i);
// }

//let arr = [10,20,30,40,50,60,70,80,90];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for of and for in loop

//let items =["first","second",3,4,"fifth"];

//for(let item of items){
//  console.log(item);
//}

//for(let index in items){
//  console.log(index)
//console.log(items[index]);
//}
// "use strict"

// type of console

// console.log("log statement");
// console.error("this is an error console");
// console.warn("this is warning console");

// console.assert(5 > 10, "5 is not greater than 10");

// console.assert(5 > 10, "10 is not greater than 5");

// let person = {
//     name: "harsh",
//     age: "20",
//     address: {
//         city: "udaipur",
//         zipcode: "313001"
//     },
//     hobbies: ("singing", "travelling")
// }
// console.dir(person)

// let data = [
//     {
//         name: "harsh", address: "jaipur", dept: "f50"
//     },
//     {
//         name: "yahoo", address: "udaipur", dept: "cse"
//     },
//     {
//         name: "ram", address: "wifii", dept: "eco"
//     }
// ]
// console.table(data);

// console.group("Group");
// console.log("message 1");
// console.log("m2");
// console.log("m3");
// console.groupEnd();

// console.count("counter");
// console.count("counter");
// console.count("counter");

// let arr =[10,20,30,40];
// let result=arr.push(1000); //to push the element
// console.log(result); //indexing btaega

// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// let arr=[10,20,30];
// console.log(arr.unshift(1000))
// console.log(arr); //unshift is used to add the element at 0 th index(returns array lenth)

// console.log(arr.shift()) //to remove the element from 0 the index
// console.log(arr);

// let arr1=[20,30];
// let arr2=[10,40];
// let result=arr2.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(concat); ///to concat both arrays but it doesnt change the original arrays it form new array

// slice(it doesnt change the original array)
// let arr=[10,20,30,40];
//  let slicearr=arr.slice(2,5) //here ye 2 indexing se start hogi slicing whereas to end 5 likhne pr wo 4 tk hi likh kr dega
//  console.log(arr);
// console.log(slicearr);

// splice(change the array)
// let arr3=[10,20,30,40];
// console.log(arr3.splice(2)); //to remove the element from back after 2 index
// arr3.splice(2,2,"gargi") //to repace the 2 element to gargi and will remove the second element
// // arr.splice(2,0,"gargi") to add the string but not to remove the 2 index
// console.log(arr3);

// includes
// let arr4=[20,30,40,50]
//     let result=arr4.includes(40); //if 40 is in the array it will return true
//     console.log(result1);

// // reverse
// arr3.reverse();
// console.log(arr);

// join
// let arr=[10,20,30,40,50,60];
// let result1=arr.join("+"); //to add + between each element predsent in arrays(mostly used for the format change of date)
// console.log(result1);

//  flat

// let arr5 = [10, 20, [30, [40]]]
// let result2 = arr5.flat(1) //it is used to remove the nested loop if 1 than it will remove one nested array
// console.log(result2)

// map,filter,reduce

let arr = [10, 20, 30, 40, 50, 60];

let newarr = arr.map((item)=>{
    if(item>30){
        return item;
        //break;
    }
   //return item*100;
})
console.log(newarr);
console.log(arr);

//for each

arr.foreach
