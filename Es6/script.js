// var x = 10;
// if(true)
// {
//     var x =5;
// }
// console.log(x);

// let x = 10;
// if(true)
// {
//     let x =5;
// }
// console.log(x);


// const x = 10;
// x = 5;

//string concatentation

// var name = 'md abdur rahim';
// var age = 26;
// console.log('My name is ' + name + ' and i am '+ age + " years old.");

//string template
// console.log(`I am ${name} and i am ${age} years old.`);


//function
// function sum(x,y){
//     let sum = x + y;
//     return sum;
// }
// console.log(sum(10,4))


//hoisting
// x = 20;
// console.log(x);
// let x;


//default parameter

// function message(text = "welcome to this area")
// {
//     console.log(text)
// }
// message('hey, how are you');


//rest operator

// function printNumber(a,b,...c)
// {
//     console.log(`a = ${a} and b = ${b} and c = ${c}`);
// }
// printNumber(2,3,4,5,6)


//spread operator

// let numbers = [3, 4, 5];
// // let number = [2, [...numbers], 7];
// // console.log(number);

// let number1 = [1, 2, 3];
// let number2 = [4, 5, 6];

// let number = [[...number1], [...number2]];
// console.log(number);

// let obj1 = {
//     name:'Md Jasim Uddim',
//     age:23
// }
// let obj2 = {
//     occupation:'student',
//     destination:'software developer'
// }

// let personalDetails = {...obj1, ...obj2};
// console.log(personalDetails);


// //object literals
// function studentDetails(name, age)
// {
//     return {
//         name,
//         age
//     }
// }
// console.log(studentDetails("Md Jasim Uddim", 26))


//for of loop
// let str = ['Rahim', 'Karim', 'Jasim', 'Jubayer'];

// for(let x of str){
//     console.log(x);
// }

//for in loop
// let obj = {
//     id:1703035,
//     name : 'md jasim uddim',
//     cgpa:3.01
// }

// for(let x in obj){
//     console.log(`${x}:${obj[x]}`);
// }

//for loop and foreach loop

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }   

// console.log(sum);
// let sum = 0;
// let newArr = [];
// numbers.forEach(function(x ,index, arr){
//     newArr.push(x*x);
// })

// console.log(sum);
// console.log(newArr);

// var numbers = [1,2, 3, ]

// var squareNumber = numbers.map(function(x){
//     return x*x;
// })

// console.log(squareNumber);

// var anotherSquareNumber = numbers.filter(function(x){
//     return x > 20;
// })
// console.log(anotherSquareNumber);


//arrow function vs traditional function

// function display1()
// {
//     console.log('Hey i am from traditional function');
// }

// const display2 =() => console.log('Hey i am from arrow function');



// display2();
// display1();

// function message1()
// {
//     return 'i am from traditional function';
// }

// console.log(message1());


// const message2 = () => 'i am from arrow function';
// console.log(message2());


// function sum1(a,b){
//     return a+b;
// }

// console.log(sum1(10,20));

// var students  = [
//     {
//         id:101,
//         name:'Md Jasim uddim',
//         cgpa:3.01
//     },
//     {
//         id:102,
//         name:'Abm. siddiqur Rahman',
//         cgpa:3.17
//     },
//     {
//         id:103,
//         name:'Md zianur Joy',
//         cgpa:2.71
//     },
// ]

// function studentName()
// {
//     return students.filter(function(x){
//         return x.cgpa > 3.00
//     }).map(function(y){
//         return y.name;
//     })
// }

// console.log(studentName());


//destructuring
// const numbers = [10, 20, 30, 40, 50];
// const [a,b,...c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// let a =10;
// let b = 20;

// [a,b] = [b,a];
// console.log(a)
// console.log(b);


function personInfo({name, moreInfo}){
    console.log(`${name} is looks like ${moreInfo.color}`);
}

let object = {
    name:'md jasim uddim',
    age:26,
    stuentId:function(){
        console.log(`${this.name} is ${this.age} years old`);
    },
    moreInfo:{
        hairStyle:'normal',
        color:'black'
    }
}
personInfo(object);

