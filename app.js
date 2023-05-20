// import * as idx from './js/index.js';
// import { user } from './js/constructor.js'
//         console.log(idx.myName);
//         console.log(user);
//         console.log(idx.date);
        // alert("Hello world!")


// This is a constructor function       
// function Person(first, last, a=30){
//    this.fisrtName = first;
//    this.lastName = last;
//    this.age = a;
//    this.sayHi = function (){
//         alert("Hi");
//    }
//    this.changeAge = function(newAge){
//         this.age = newAge;
//    }
// }   
// let person1 = new Person("Milapdeep", "Singh", 30);
// person1.changeAge(31);
// let person2 = new Person("Pawan", "Kumar",28);

// console.log(person1);   
// console.log(person2); 

let person = {};

console.log(person);

function Person(name){
   this.firstName = name
}

let person1 = new Person("Milapdeep");

console.log(person1)


