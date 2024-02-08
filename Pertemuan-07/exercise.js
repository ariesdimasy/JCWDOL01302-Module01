function isEqual(param1, param2) {
  let string1 = JSON.stringify(param1);
  let string2 = JSON.stringify(param2);

  return Object.is(string1, string2);
}

console.log(isEqual({ a: 2 }, { a: 1 }));
console.log(isEqual({ a: 1 }, { a: 1 }));

function mergeObject(obj1, obj2) {
  let result = {};
  let objLength1 = Object.entries(obj1);
  let objLength2 = Object.entries(obj2);

  // [ [ 'a', 1 ], [ 'b', 2 ] ]

  for (let i = 0; i < objLength1.length; i++) {
    for (let j = 0; j < objLength2.length; j++) {
      if (
        objLength1[i][0] == objLength2[j][0] &&
        objLength1[i][1] == objLength2[j][1]
      ) {
        result = { ...result, [objLength1[i][0]]: objLength1[i][1] };
      }
    }
  }

  return result;
}

console.log(mergeObject({ a: 1, b: 2 }, { a: 1, c: 3 }));

function flipObject(arr) {
  let result = [];

  for (let i of arr) {
    let newObj = {};
    for (let key in i) {
      newObj[i[key]] = key;
    }

    result.push(newObj);
  }

  return result;
}

console.log(flipObject([{ name: "david", age: 20 }]));

// let data = [{ name: "david", age: 20 }];
// for (let i of data) {
//   console.log(i);
// }
