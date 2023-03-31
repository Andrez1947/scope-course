//Otro ejemplo: Una función que aumente el valor del contador de la función padre (crearContador). Adicional otra función que cada 5 segundos el contador

function crearContador() {
    let contador = 0; //variable de función
  
    setTimeout(function () {
      contador = 100; //reasignando valor a variable contador
    }, 5000);
  
    return function incrementar() {
      contador = contador + 1; ///reasignando variable contador again
      return contador;
    };
  };
  
  const contador1 = crearContador(); //Declarando una variable y dándole la función padre como asignación
  
  //Nota: Para usar esta variable, debo poner al final ().
  
  console.log(contador1());
 
  

  
