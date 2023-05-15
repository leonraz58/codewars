//https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (i=0; i < classPoints.length; i++) {
      sum += classPoints[i];
    }
    let avg = sum / classPoints.length;
    if (yourPoints > avg) {return true} else {return false};
  }