//https://www.codewars.com/kata/541c8630095125aba6000c00
function digitalRoot(n) {
    while (n>=10) {
      let sum = 0;
      while (n>0){
        let ld = n % 10;
        sum+=ld;
        n = (n - ld) / 10;
        
      }
      n = sum;
    }    
      return n;
  }