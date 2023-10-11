let array = [4, 12, 1, 55, 9, 10, 23, 5]; // [1, 4, 5, 9, 10, 12, 23, 55]
let array2 = []; // []

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const half = Math.ceil(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, half));
  const secondHalf = mergeSort(array.slice(half));

  return mergeArray(firstHalf, secondHalf);
}

function mergeArray(firstHalf, secondHalf) {
  const sortedArray = [];

  while (firstHalf.length > 0 && secondHalf.length > 0) {
    const minArray = firstHalf[0] < secondHalf[0] ? firstHalf : secondHalf;
    sortedArray.push(minArray.shift());
  }
  return sortedArray.concat(firstHalf, secondHalf);
}

console.log(mergeSort(array));
console.log(mergeSort(array2));
