"strict";

// var myName = "Max";
// console.log(myName);

// function printMyName(name) {
//   console.log(name);
// }

// const printMyNameArr = (name) => {
//   console.log(name);
// };

// // For one argument you can use shortcut

// const printMyNameArrS = (name) => {
//   console.log(name);
// };

// // Function with no arguments

// const printMyNameArrSs = () => {
//   console.log("Nax");
// };

// // Function with more arguments

// const printMyName3 = (name, age) => {
//   console.log(name, age);
// };

// // Function with multiplying

// const multiply = (number) => {
//   return number * 2;
// }

// // Function with multiplying

// const multiply2 = number => number * 2;

// printMyName("Max");
// printMyNameArr("Samo");
// printMyNameArrS("Samo2");
// printMyNameArrSs();
// printMyName3("Max", 28);
// console.log(multiply(2));

// class Human {
//   gender = "male";

//   printGender = () => {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//     name = "tranw";
//     gender = "female";

//   printMyNameg = () => {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyNameg();
// person.printGender();

// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1, num3);

// const person = {
//   name: "Max",
// };

// const secondPerson = person
// const secondPerson = {
//   ...person
// };

// person.name = "Manu";

// console.log(secondPerson);

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
 return num * 2;
});

console.log(doubleNumArray);
