//https://www.codewars.com/kata/5963c18ecb97be020b0000a2
function derive(coefficient,exponent) {
    s1= coefficient * exponent;
    s2 = exponent - 1;
    
    return s1+"x^"+s2;
  }