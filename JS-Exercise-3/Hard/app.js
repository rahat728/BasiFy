// Count Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split("")
    .reduce((count, char) => (vowels.includes(char) ? count + 1 : count), 0);
}

console.log(countVowels("Basify Web Development"));

// Sum Mixed Array
function sumMixedArray(array) {
  return array.reduce(
    (sum, value) => sum + (typeof value === "number" ? value : 0),
    0
  );
}

console.log(sumMixedArray([1, "2", true, 3, "4", false, 5]));
