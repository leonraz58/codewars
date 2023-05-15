//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0 ) {
      return [];
      } else {
    let arr = [0, 0];
    for (i = 0; i < input.length; i++)  {
      if (input[i] > 0) arr[0]++;
      if (input[i] < 0) arr[1]+=input[i];
    }
    return arr;
    }  
  }