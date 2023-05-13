//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
    a = new Array();
    i=0;
    if (n===0){a[0]=0;}
    while (n>0){
      last=n%10;
      a[i]=last; 
      i++;
      n=(n-last)/10;
    }
    return a;
  }