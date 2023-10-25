// function getPrimeNumber(number) {
//   if (!Array.isArray(number)) {
//     return "please provide an array";
//   }
//   let primes = [];
//   for (let item of number) {
//     if (item > 1) {
//       let isPrime = true;
//       for (let i = 2; i < item; i++) {
//         if (item % 2 === 0) {
//           isPrime = false;
//         }
//       }
//       if (isPrime === true) {
//         primes.push(item);
//       }
//     }
//   }
//   return primes;
// }

// const arr = [2, 4, 6, 8];
// console.log(getPrimeNumber(arr));

function getPrimeNumber(number) {
  if (!Array.isArray(number)) {
    return "please provide an array";
  }
  let primes = [];

  for (let item of number) {
    if (item > 1) {
      let isPrime = true;
      for (let i = 2; i < item; i++) {
        if (item % 2 === 0) {
          isPrime = false;
        }
      }
      if (isPrime == true) {
        primes.push(item);
      }
    }
  }
  return primes;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getPrimeNumber(array));
