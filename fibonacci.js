// Iterative Solution

function fibs(n) {
  let array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

console.log(fibs(8));

// Recursive Solution

function fibsRec(n) {
  if (n <= 1) {
    return [0, 1];
  } else {
    let array = fibsRec(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
}

console.log(fibsRec(8));
