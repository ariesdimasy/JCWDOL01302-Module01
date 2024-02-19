function calculator(a, b, callback) {
  console.log("do calculation ...");
  return callback(a + b);
}

let res = calculator(10, 34, (result) => {
  console.log("iam the callback");
  console.log("result => ", result);
  return result;
});

console.log(" res => ", res);
