function countPrimeNumbers() {
  // return # of prime numbers from 2 - 100
  let primeCount = 0;
  let start = 2;
  let end = 101;
  let isPrime;
  for (let i = start; i < end; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      } else isPrime = true;
    }
    if (isPrime || i === 2) {
      primeCount++;
    }
    isPrime = null;
  }
  return primeCount;
}

let t1 = performance.now();
countPrimeNumbers();
let t2 = performance.now();
let timeElapsed = t2 - t1;
console.log(
  "Execution time of printing countPrimeNumbers was " +
    timeElapsed +
    " milliseconds."
);
