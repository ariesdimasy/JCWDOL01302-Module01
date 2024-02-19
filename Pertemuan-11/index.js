function majorityElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    // arr[0]
    let sum = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        sum += 1;
      }
    }

    if (sum > arr.length / 2) {
      return arr[i];
    }
  }

  return -1;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 3, 2]));
