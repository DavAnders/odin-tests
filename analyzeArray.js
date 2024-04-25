function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  let min = undefined;
  let max = undefined;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      // Initialize min and max with the first number found
      if (min === undefined || max === undefined) {
        min = arr[i];
        max = arr[i];
      }

      sum += arr[i];
      count++; // Only increment count for numbers

      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }

  const average = count > 0 ? sum / count : 0;

  const obj = {
    average: average,
    min: min,
    max: max,
    len: count,
  };

  return obj;
}

module.exports = analyzeArray;
