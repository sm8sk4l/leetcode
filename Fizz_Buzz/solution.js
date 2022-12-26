const fizzBuzz = function (n) {
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";

    str === "" ? numbers.push(String(i)) : numbers.push(str);
  }

  return numbers;
};
