module.exports = function solveEquation(equation) {
  // your implementation
  module.exports = function solveEquation(equation) {
  // your implementation

  // /([-0-9])\w+/  //находим а
  // /((\+\s|\-\s))[0-9]\w+\s/
  // /((\+\s|\-\s))[0-9]\w+$/ //находим

  // var tempArr = []; // массив a, b, c
  //
  // var tempArr4 = []; // совпадение для b
  // var tempArr5 = []; // совпадение для c

  var pattern1 = /([-0-9])\w+/
  tempArr = equation.match(pattern1); // добавил а
    var a = tempArr[0];
    console.log(a);

  var pattern2 = /((\+\s|\-\s))[0-9]\w+\s/;
  tempArr4 = equation.match(pattern2)
  var b = tempArr4[0].replace(/\s/,'');
  console.log(b);

  var pattern3 = /((\+\s|\-\s))[0-9]\w+$/
  tempArr5 = equation.match(pattern3)
  var c = tempArr5[0].replace(/\s/,'');
  console.log(c);

  var arr = [];
  var d, x1, x2;
  d = b*b - 4*a*c;

  if (d >= 0) {
      x1 = (-b + Math.sqrt(d)) / (2*a);
      x2 = (-b - Math.sqrt(d)) / (2*a);

  if (x1<x2) {
      arr.push(Math.round(x1), Math.round(x2));
  } else {
      arr.push(Math.round(x2), Math.round(x1));
  }


  }
  return arr;

}

}
