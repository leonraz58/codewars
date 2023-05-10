//https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let sum = 0;
    for (let element of arr) {
      if (element > 0) {
        sum += element;
      }
    }
    return sum;
  }