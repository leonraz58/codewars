//https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
    let arr = numbers.split(' ');
    let min = arr[0];
    let max = arr[0];
    for (i=0; i<arr.length; i++){
      if (+arr[i]<min) {min = +arr[i];}
      if (+arr[i]>max) {max = +arr[i];}
    }
    return max + ' ' + min;
   // return arr;
  }