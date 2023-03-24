//variables

var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; // reasignación
var a = 'aa'; //redeclaración

//Global scope
var fruit = 'apple'; //Variable global (Se accede a ella tanto fuera de la función como desde la función que la llame)

//Función llama a variable global fruit
function bestFruit() {
    console.log(fruit);
}

bestFruit();

//Cuando declaramos una variable dentro de una función sin let, var o const, esta se vuelve una variable global
function countries () {
    country = 'Colombia'
    console.log(country);
}

countries();
console.log(country);

