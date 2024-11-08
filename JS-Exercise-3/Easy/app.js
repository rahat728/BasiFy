// Function to reverse words in a sentence
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(
  "Reversed Words: 'Function to reverse words in a sentence' ->",
  reverseWords("Function to reverse words in a sentence")
);

// Function to sum all elements in an array using forEach
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}

console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));

// Function to square each element in an array and return the total sum of the squares using map

function squareAndSum(numbers) {
  return numbers.map((num) => num * num).reduce((sum, num) => sum + num, 0);
}

console.log("Square and Sum of [1, 2, 3]:", squareAndSum([1, 2, 3]));

// Function to get today's date in "YYYY-MM-DD" format

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}
console.log(getTodayDate());
