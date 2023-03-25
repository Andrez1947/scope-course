//Lexical ambit es la accesibilidad a las variables declaradas en funciones anidadas y el orden de acceso a estas.

const myGlobal = 0; // Variable Global

function myFunction() {
  const myNumber = 1; //Variable de función
  console.log(myGlobal);

  function parent() {
    //función interna
    const inner = 2; //Variable de bloque parent
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
};

myFunction();

//En la función anterior, myFunction anida otra función parent que a su vez anida una función child.myFunction accede a la variante global y la propia, parent accede a su variable inner + my Number + myGlobal y child accede a todas.  
