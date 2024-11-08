//  Filter Primes
function filterPrimes(numbers) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return numbers.filter(isPrime);
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("Function for capitalizing words"));

// Find Max
function findMax(numbers) {
  return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
}

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Any Negative
function anyNegative(numbers) {
  return numbers.some((num) => num < 0);
}

console.log(anyNegative([1, 2, 3, -4, 5]));
