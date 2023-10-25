//  function recall/recursion

 function sumOfN(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumOfN(n - 1);
  }
}

console.log(sumOfN(5));
