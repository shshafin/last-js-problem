function printDetails(input) {
  if (typeof input !== "object") {
    return "please provide an object";
  }
  let nam = input.name || "nai";
  let boyosh = input.age || "nai";
  let mail = input.email || "nai";
  let bou = input.bou || "nai";

  return (
    "amar nam " +
    nam +
    ".\namar boyosh " +
    boyosh +
    ".\namar email " +
    mail +
    ".\namar bou " +
    bou
  );
}

const obj = {
  name: "shafin",
  age: 19,
  email: "shafinsadnan08@gmail.com",
};
console.log(printDetails(obj));
