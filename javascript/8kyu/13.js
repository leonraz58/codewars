//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(x){
    result = '';
    for (let i = 0; (i<x.length); i++){
      if (x[i] !== ' ') {
        result += x[i];
      }
    }
    return result;
  }