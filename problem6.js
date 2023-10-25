function gemsToDiamond(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "please provide numbers";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "please provide positive numbers";
  } else if (num1 % 1 !== 0 || num2 % 1 !== 0 || num3 % 1 !== 0) {
    return "please provide only integer numbers";
  }
  let firstFriend = 21;
  let secondFriend = 32;
  let thirdFriend = 43;

  const firstDiamond = num1 * 21;
  const secondDiamond = num2 * 32;
  const thirdDiamond = num3 * 43;

  let totalDiamond = firstDiamond + secondDiamond + thirdDiamond;
  if (totalDiamond > 1000 * 2) {
    totalDiamond = totalDiamond - 2000;
  }
  return totalDiamond;
}

console.log(gemsToDiamond(100, 5, 1));
