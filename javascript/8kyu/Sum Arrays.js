//https://www.codewars.com/kata/57cc975ed542d3148f00015b
function check(a, x) {
    for (i=0; i<a.length; i++){
      if (x === a[i]) return true
    }
    return false;
  }