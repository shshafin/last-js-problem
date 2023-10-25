// approach : 1
function isInteger(input) {
  if (typeof input !== "number") {
    return "please provide a number";
  }
  if (input != parseInt(input)) {
    return false;
  } else {
    return true;
  }
}
console.log(isInteger(9.01));


// approach : 2
function isInteger(input) {
  if (typeof input !== "number") {
    return "please provide a number";
  }
  if (input % 1 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isInteger(9));
