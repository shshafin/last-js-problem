function isLGseven(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  } else if (number - 7 < 7) {
    return number - 7;
  } else {
    return number * 2;
  }
}

console.log(isLGseven(15));
