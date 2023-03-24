//Una variable con scope de función solo puede ser accedida por la misma función o funciones y bloques anidados a ella. Debe ser declarada con let o const
function greeting () {
    let userName  = 'Ana'; //Declarando functionscope variable
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting(); //Llamando a función
console.log(userName); //Prueba de que no es global