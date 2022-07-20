
// function saludar() {
//     let hola = "Buenos días";
//     hola += " a todos!!";
//     console.log(hola);
// }

// function despedirse() {
//     if(hola == 'Hola') {
//         const despedida = "Chao";
//         console.log(despedida);
//     } else {
//         console.log("Adios");
//     }
//     console.log(despedida);
// }


// saludar();

// let hola = "Hola";

// despedirse();


// console.log(hola);


// const names = ['Paul', 'George', 'John', 'Ringo'];


// // function actuallyPrintingNames() {
// //     let index = 0;
// //     let name;
// //     for (index; index < names.length; index++) {
// //       name = names[index];
// //       console.log(name + ' was found at index ' + index);
// //     }
// //     console.log('name and index after loop is ' + name + ':' + index);
// // }

// // function actuallyPrintingNames() {
// //     let index = 0;
// //     for (; index < names.length; index++) {
// //       let name = names[index];
// //       console.log(name + ' was found at index ' + index);
// //     }
// //     return index-1;
// //   }    


// // const indice = actuallyPrintingNames();

// // console.log(indice);


// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//       {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//       },
//       {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//       }
//     ],
//     createdAt: 1543945177623
//   };

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// console.log(person.firstName);

// console.log(animals[2]);

// const { firstName, lastName, username, email: correo, addresses:[,{city}] } = person;
// const [ ,, ...resto ] = animals;

// console.log(firstName, username, correo, city);
// console.log( resto);


// const arr = ['lion', ...animals, 'rat'];

// console.log(arr);

// let name = 1;
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);


// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);


variab

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

var variable;
let variableLet;
const variableConst = 1;

function test() {
    var var1;
    let var2;
    const var3 = 3;
}