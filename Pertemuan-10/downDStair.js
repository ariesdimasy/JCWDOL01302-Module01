function downDStair(input) {
  let prevNumber = 0;
  let nextNumber = 1;
  let result = 0;

  for (let i = 1; i <= input; i++) {
    result = prevNumber + nextNumber;
    prevNumber = nextNumber;
    nextNumber = result;
  }

  return result;
}

console.log(downDStair(1));
console.log(downDStair(2));
console.log(downDStair(3));
console.log(downDStair(4));
console.log(downDStair(5));
console.log(downDStair(6));
