function mindGame(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  } else if (number <= 0) {
    return "please provide a positive number";
  } else {
    const result = (number * 3 + 10) / 2 - 5;
    return result;
  }
}

console.log(mindGame('0'));
