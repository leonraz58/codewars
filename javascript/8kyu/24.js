//https://www.codewars.com/kata/57f781872e3d8ca2a000007e
function maps(x){
    let y = new Array(...x);
    for (i=0;i<x.length;i++){
      y[i]=x[i]*2;
    }
    return y;
  }