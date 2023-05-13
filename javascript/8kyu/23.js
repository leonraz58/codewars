//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
    let n = haystack.findIndex(name => name === "needle");
    return "found the needle at position " + n;
  }