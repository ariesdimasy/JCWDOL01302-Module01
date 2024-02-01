/* */

// 7 = 2, 3 ,4, 5 ,6

let num = 9;
let isPrime = true; //
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log(i, " === 3");
    isPrime = false;
    break;
  }
}

console.log(num, " is prime = ", isPrime);

/*
    VAR =         --> 1
    VAR = VAR + 2 --> 3
    VAR = VAR + 3 --> 6
    VAR = VAR + 4 --> 10
*/

let res2 = 0;
for (let i = 1; i <= 5; i++) {
  res2 = res2 + i; // 0
}

console.log(res2);

// decreasing --> step menurun
let res3 = 1;
let start = 10;
for (let i = start; i >= 1; i--) {
  res3 = res3 * i;
}

console.log(res3);

// 0+1+1+2+3+5+8+13+21+34+55+89+144+233+377

let finish = 15;
let res4 = 0;
let prev = 0;
let next = 1;

for (let i = 2; i <= finish; i++) {
  res4 = prev + next; // penampung terakhir

  prev = next;

  next = res4;

  //console.log(i, " =================== ", i);
}
