function findingBadData(input) {
  if (!Array.isArray(input)) {
    return "please provide an array";
  }
  let badData = 0;
  //   for (let i = 0; i < input.length; i++) {
  //     if (typeof input[i] !== "number") {
  //       return "please provide an array of  number";
  //     } else {
  //       if (input[i] < 0) {
  //         badData++;
  //       }
  //     }
  //   }

  for (let item of input) {
    if (typeof item !== "number") {
      return "please provide an array of number";
    } else {
      if (item < 0) {
        badData++;
      }
    }
  }
  return badData;
}

const array = [2, -5, -7, -13];
console.log(findingBadData(array));
