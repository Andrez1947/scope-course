//Usando var puedo declarar, asignar, redeclaras y reasignar:
var firstName; //Undefined
firstName = 'Saul Hermano'; //Asignando
console.log(firstName);

var lastName = 'Goodman'; //Declarar y asignar
lastName = 'Mcgill'; //Reasignar
console.log(lastName);

var secondName = 'Jimmy'; //Declarar y asignar
var secondName = 'Kim'; //Reasignando
console.log(secondName);

//Usando let puedo declarar, asignar y reasignar:

let fruit; // declarando

fruit = 'Banana'; // Asignando
fruit = 'Orange'; //Reasignar

console.log(fruit);

let fruit = 'Pinneaple'; //Redeclarar (error)

//Const: No puedo declarar ningún tipo e dato. No puedo redeclarar ni reasignar datos primitivos (Integer, String, Undefined, Null, Symbol, Boolean). Puedo reasignar pero NO redeclarar arrays y objetos:

const animal = 'dog'; //Declarando y asignando

const animal = 'Snake' //No puedo redeclarar

const vehicles = []; //Declarando y asignando const
vehicles.push('🚗'); //Reasignando array (Add carrito)
console.log(vehicles);
vehicles.pop(); //Reasignando de nuevo array (remove carrito)
console.log(vehicles);
