//https://www.codewars.com/kata/59811fd8a070625d4c000013
function integrate(coefficient, exponent) {
    b = exponent += 1; 
    a = coefficient/exponent;
    return a+'x^'+b;
  }