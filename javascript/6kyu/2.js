//https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
    //happy coding!
    let i = 0;
    for (num1 of A){
      let sum = 0;
      for (num2 of A){
        if (num1===num2) {sum++;}
      }
      if (sum % 2 !== 0) {
        i = num1;
        break;
      }
    }
    return i;
  }