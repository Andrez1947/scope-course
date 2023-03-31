function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    function secondNumberFunction(secondNumber) {
      if (secondNumber >= 0) {
        resultado = firstNum + secondNumber;
      } else {
        resultado = firstNum;
      }
      return resultado;
    }
    return secondNumberFunction();
  }
  
  const closureFunction = sumWithClosure(2);
  console.log(closureFunction(3));