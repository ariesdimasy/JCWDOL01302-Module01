function excelSheet(column) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let total = 0;

  for (let i = column.length - 1; i >= 0; i--) {
    let char = alphabet.split("").findIndex((item) => item == column[i]) + 1;
    //console.log(char);
    total += char * 26 ** (column.length - 1 - i);
    console.log("total --> ", total);
  }

  //   for (let i = 0; i < column.length; i++) {
  //     let char = alphabet.split("").findIndex((item) => item == column[i]) + 1;
  //     //console.log(char);
  //     total += char * 26 ** (column.length - 1 - i); // i = 1
  //     console.log("total --> ", total);
  //   }

  return total;
}

console.log(excelSheet("AB")); // 28
console.log("=====================");
console.log(excelSheet("BA")); // 53
// console.log(excelSheet("AA")); // 27
// console.log(excelSheet("FD")); // 160
// console.log(excelSheet("ZZ")); // 702
// console.log(excelSheet("AAA")); // 703
// console.log(excelSheet("ABC")); // 731
// console.log(excelSheet("BCD")); // 1434
// console.log(excelSheet("ZZZ"));
// console.log(excelSheet("ZZZZ"));
