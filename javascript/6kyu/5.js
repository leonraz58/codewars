//https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
    for (num of b){
      while (a.includes(num)){
        i = a.findIndex(ii => ii === num)
        a.splice(i,1);
      }
    }
  return a;
}