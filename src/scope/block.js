//Block scope es que si una variable se declara con let y const y está al interior de un bloque (if, for, try chatch, while o cualquiera encerrado en {}, solo podra ser acedido desde ese bloque. Si se declara con var (Que no debería ser), tendrá global scope):

function fruit () {

    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Banana';
        const fruit3 = 'kiwi';
    }

    console.log(fruit1); //Permite acceder por el var
    console.log(fruit2); //Muestra error por que se accede fuera del bloque
    console.log(fruit3); //Ni siquiera se muestra el error, por que el anterior rompió el algoritmo
}

//llamado
fruit();

//Intento con llamado de bloque:

function fruit2() {

    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Banana';
        const fruit3 = 'kiwi';
        console.log(fruit2); //Permite acceder block scope
        console.log(fruit3); //Permite acceder block scope
    }

    console.log(fruit1); //Ni siquiera se muestra el error, por que el anterior rompió el algoritmo
}

//llamado
fruit2();