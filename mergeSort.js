const array = [4, 12, 1, 55, 9, 10, 23, 5]; // [1, 4, 5, 9, 10, 12, 23, 55]
const array2 = []; // Invalid
const array3 = [-10, -4, -9, 55, 2, 9, 1]; // [-10, -9, -4, 1, 2,  9, 55]
const array4 = ["one", 2, "three", 4]; // Invalid

function mergeSort(array) {
  // Invalid Checks
  if (!array.length) {
    return "Empty Array";
  }
  if (!array.every((e) => (typeof e === "number" ? true : false))) {
    return "Invalid Array. Only numbers can be sorted";
  }

  // Base Case
  if (array.length <= 1) {
    return array;
  }

  // Split array down to base case using recursion
  const half = Math.ceil(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, half));
  const secondHalf = mergeSort(array.slice(half));

  // Check for lowest number at index [0], push to sortedArray and return to continue stack
  const sortedArray = [];
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    const minArray = firstHalf[0] < secondHalf[0] ? firstHalf : secondHalf;
    sortedArray.push(minArray.shift());
  }

  return sortedArray.concat(firstHalf, secondHalf);
}

console.log(mergeSort(array));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
console.log(mergeSort(array4));
