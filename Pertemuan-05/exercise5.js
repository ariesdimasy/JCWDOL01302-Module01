function statisticNumber(arr) {
  let max = arr[0]; // 45
  let min = arr[0]; // 4
  let average = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    // 4 < 5
    if (arr[i] < min) {
      min = arr[i]; //4
    }

    total = total + arr[i];
  }

  average = total / arr.length;

  return { min: min, max: max, average: average, total: total };
}

console.log(statisticNumber([12, 5, 23, 18, 4, 45, 32]));

function arrayToString(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result = result + "and " + arr[i];
    } else {
      result = result + arr[i] + ", ";
    }
    console.log(result);
  }

  return result;
}

console.log(arrayToString(["apple", "banana", "cherry", "date"]));

function mergeWord(str) {
  let result = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      temp = temp + str[i];
    }

    if (str[i] == " " || i === str.length - 1) {
      result.push(temp);
      temp = "";
    }
  }

  return result;
}

console.log(mergeWord("Hello World"));

function sumArray(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return "invalid array";
  }

  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = arr1[i] + arr2[i];
    result.push(temp);
  }

  return result;
}

console.log(sumArray([2, 3, 4], [0, 9, 8]));

function checkArrayexist(arr, newElement) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (newElement == arr[i]) {
      flag = true;
      break;
    }
  }

  if (flag == false) {
    arr.push(newElement);
  }

  return arr;
}

console.log(checkArrayexist([1, 2, 3, 4], 8));
console.log(checkArrayexist([1, 2, 3, 4], 4));

function maximumCapacity(maxSize, ...arr) {
  let result = [];
  for (let i = 1; i <= maxSize; i++) {
    result.push(arr[i - 1]);
  }
  return result;
}

console.log(maximumCapacity(5, 5, 10, 24, 3, 6, 7, 8));
