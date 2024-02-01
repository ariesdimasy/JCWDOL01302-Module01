/*
 input 1000
index dari 1, <-- start  
 loop dari belakang 
  
    jika ketemu per tiga angka  , tambahkan angka lalu tambahkan titik 
    jika tidak , tetap tambahkan angka ke result

000.1
loop reverse lagi ( loop dari belakang lg )

1.000

tambahkan imbuhan : Rp. angka result 
*/

let number = String(10000000);
let counter = 1;
let reverseRes = "";
let finalResult = "";

for (let i = number.length - 1; i >= 0; i--) {
  if (counter % 3 === 0 && counter != number.length) {
    reverseRes += number[i] + ".";
  } else {
    reverseRes += number[i];
  }

  counter++;
}

console.log(reverseRes);

for (let j = reverseRes.length - 1; j >= 0; j--) {
  finalResult += reverseRes[j];
}

console.log("Rp. " + finalResult);

let number2 = String(10000);
let counter2 = 1;
let reverseRes2 = "";
let finalResult2 = "";

for (let i = number2.length - 1; i >= 0; i--) {
  if (counter2 % 3 === 0 && counter2 != number2.length) {
    reverseRes2 += number2[i] + ".";
  } else {
    reverseRes2 += number2[i];
  }

  counter2++;
}

console.log(reverseRes2);

for (let j = reverseRes2.length - 1; j >= 0; j--) {
  finalResult2 += reverseRes2[j];
}

console.log("Rp. " + finalResult2);
