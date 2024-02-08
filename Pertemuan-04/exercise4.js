function triangelPattern(height) {
  let counter = 1;
  // looping jumlah baris

  for (let i = 1; i <= height; i++) {
    let row = "";
    // looping jumlah item based on baris keberapa
    for (let j = 1; j <= i; j++) {
      row += (counter < 10 ? "0" : "") + counter + " ";
      counter++;
    }

    console.log(row);
  }
}

triangelPattern(4);
// triangelPattern(10);
/*
    tinggi = 4 
    per baris , adalah jumlah perulangan item / sama ngan jumlah item 
    item nya selalu meningkat dari jumlah item sebelumnya per baris 

    1 -> 1
    2 -> 3 
    3 -> 6 
    4 -> 10
    5 -> 15
    6 -> 21
*/

// FIZZ BUZZ
/* 
looping by input 
  jika angka kelipatan 3 , ganti jadi fizz
  jika angka kelipatan 5 ,ganti jadi buzz
  jika angka kelipatna 3 dan 5 , ganti jadi fizz buzz
  jia bukan keduanya , maka tampilkan angka biasa
*/

function fizzBuzz(input) {
  for (let i = 1; i <= input; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(5);
console.log("=======");

// fizzBuzz(20);

// remove odd number
/*
  baca satu - satu item array menggunakan : 


*/
function removeOddNumber(arr) {
  let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     result.push(arr[i]);
  //   }
  // }

  for (let i of arr) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
