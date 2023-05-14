//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
function findMultiples(integer, limit) {
    //your code here
    let arr = Array();
    for (i=integer; i<=limit;i=i+integer){
      arr.push(i);
    }
   // arr.push(limit);
    return arr;
    
  }