function romanNumeral(chars) {
  let romanNumber = {
    I: 1,

    V: 5,

    X: 10,

    L: 50,

    C: 100,

    M: 1000,
  };

  //   for (let key in romanNumber) {
  //     console.log(key, " --> ", romanNumber[key]);
  //   }

  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    let thisChar = chars[i]; // M
    let nextChar = chars[i + 1];

    if (
      romanNumber[thisChar] >= romanNumber[nextChar] ||
      nextChar == undefined
    ) {
      //console.log(thisChar, " = ", romanNumber[thisChar]);
      result += romanNumber[thisChar];
    } else {
      //console.log(" * => ", thisChar, " = ", romanNumber[thisChar]);
      //   result += romanNumber[thisChar + nextChar];
      result += romanNumber[nextChar] - romanNumber[thisChar];
      i = i + 1; // i langsung skip 1 langkah
    }
  }

  return result;
}

console.log(romanNumeral("MCMXCIV"));
console.log(romanNumeral("XIX"));
console.log(romanNumeral("LVIII"));
