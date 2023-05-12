//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
    cent = (year - year % 100) / 100;
    if (year % 100 !== 0) {
      cent = cent+1;
    }
    return cent;
  }