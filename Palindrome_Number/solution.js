const isPalindrome = function (x) {
  return x === Number(x.toString().split("").reverse().join(""));
};

console.log(isPalindrome(121));
