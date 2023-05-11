//https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
    sum=0;
    if (number>0){
      for (i=2; i<number; i++){
        if ((i % 3 === 0) || (i % 5 === 0)){
          sum += i;
        }
      }
      return sum;
    } else {return 0}    
  }