// let age = 21;

// if (age >= 17) {
//   console.log("Now you had ID Card");
// } else {
//   console.log("you are not an adult");
// }

// console.log(21 >= 17);
// console.log(15 >= 17);

// let trafficLampState = "yellow";

// // if (trafficLampState == "red") {
// //   console.log("you should stop");
// // } else if (trafficLampState == "yellow") {
// //   console.log("you should drive slow");
// // } else if (trafficLampState == "green") {
// //   console.log("you can run");
// // } else {
// //   console.log("trafficLight invalid");
// // }

// switch (trafficLampState) {
//   case "red": // trafficLampState == "red"
//     console.log("you should stop");
//   case "yellow":
//     console.log("you should drive slow");
//     break;
//   case "green":
//     console.log("you can run");
//     break;
//   default:
//     console.log("trafficLight invalid");
// }

// // const expr = "mangoes";

// // switch (expr) {
// //   case "Orange": // expr == "Orange"
// //     console.log("Orange are $0.59 a pound");
// //     break;
// //   case "Mangoes":
// //   case "Papayas":
// //     console.log("Mangoes and Papayas are $2.79 a pound");
// //     break;
// //   default:
// //     console.log(`Sorry ,we are out of ${expr}`);
// // }

// // console.log();

// // true; // 1 - infinity, "isi", [], {}

// // false; // 0 , "", null , undefined, NAN

// if ([]) {
//   console.log("array is true");
// }

// if ("") {
//   console.log("string kosong");
// }

// if (age) {
//   console.log("angka is true");
// }

// // gerbang logika dan

// console.log(true && true);
// console.log(4 < 5 && 5 < 7);
// console.log(true && false);
// console.log(4 < 5 && 5 > 7);
// console.log(false && false);

// console.log(true || true);
// console.log(4 < 5 || 5 < 7);
// console.log(true || false);
// console.log(4 < 5 || 5 > 7);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// console.log("red" != "Red");
// console.log(123 === "123");
// console.log(123 !== "123");

// if (4 < 5 && 5 < 7) {
//   console.log("benar kah ? ");
// }

// let car = "Kijang";
// if (car === "BMW" || car === "TOYOTA" || car === "Porche") {
//   console.log("mobil bagus ");
// }

// let resultCar =
//   car === "BMW" || car === "TOYOTA" || car === "Porche"
//     ? "mobil bagus"
//     : undefined;
// console.log(resultCar);

// console.log(24 % 2 == 0 ? "genap" : "ganjil");

// /*
// SET car EQUALS "Kijang"

// IF car EQUALs "BMW" OR car EQUALS "TOYOTA" OR car EQUALS "Porche" THEN:
//     PRINT "mobil bagus"
// ELSE IF car === "Lamborghini" THEN:
//     PRINT "mobil mewah"
// ELSE THEN:
//     PRINT "Bukan mobil bagus"
// */

// // ======

let counter = 1; // awalan
let step = 1; // step
let finish = 5; // akhiran

// console.log(counter);
// counter += step;
// console.log(counter);
// counter += step;
// console.log(counter);
// counter += step;
// console.log(counter);
// counter += step;
// console.log(counter);

// i = 3         4 <= 5
for (var i = 0; i <= finish; i = i + step) {
  if (i == 3) {
    continue;
  }
  console.log("loop => ", i);
}

let myIndex = 0; // awalan
// console.log(myIndex++); //<-- 0,  postfix
// console.log(myIndex);

// console.log(++myIndex); //<-- 1,  prefix
// console.log(myIndex);

// myIndex = myIndex + 1;
// 3 <= 5
while (myIndex <= 5) {
  // eksekusinya udah kelar
  myIndex++; //<-- 0,  postfix
  if (myIndex == 3) {
    continue;
  }
  console.log("loop while => ", myIndex);
}

// console.log(myIndex);
// let myIndex2 = 0;

// do {
//   console.log(" do while ==> ", myIndex);
//   myIndex++;
// } while (myIndex <= 5);

/* 
FOR i EQUALS 0 until 5 , i INCREMENT 1 THEN:
    IF i EQUALS 3 THEN:
        CONTINUE
    
    PRINT i
*/
