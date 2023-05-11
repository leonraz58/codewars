//https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
    let sum = '';
    while (num>0){
      let ld = num % 10;
      sum = String(ld*ld) +sum;
      num = (num-ld) / 10;
    }
    return Number(sum);
  }