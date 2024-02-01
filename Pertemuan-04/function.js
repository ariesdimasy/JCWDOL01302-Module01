function sequareArea(s) {
  return s * s;
}

function formatCurrency(input) {
  let number = String(input);
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

  for (let j = reverseRes.length - 1; j >= 0; j--) {
    finalResult += reverseRes[j];
  }

  return "Rp. " + finalResult;
}

const cube = function (s) {
  return s * s * s;
};

function balok(p, l, t = 5) {
  return p * l * t;
}

function hello() {
  let greeting = "morning";
  console.log("hello");
  console.log("good " + greeting);
}

function myFunc(a, b, ...resParams) {
  console.log(a);
  console.log(b);
  console.log(...resParams);
  console.log(resParams);
}

// sequareArea(6);
// formatCurrency(10000);
// formatCurrency(5006709);

const result1 = sequareArea(6);
const result2 = formatCurrency(100000);

console.log(result1);
console.log(sequareArea(6));
console.log(result2);

console.log(cube(5));
console.log(sequareArea(8));

console.log(sequareArea(5));

// f(x) = 2x + 6,  x -> 7, maka f(x) adalah ? f(x) = 20
hello();

console.log(balok(5, 2, 3));
console.log(balok(52, 41, 10));

console.log("dimas".split(""));

console.log(
  [1, 2, 7, 4].find(function (item) {
    return item == 7;
  })
);

console.log(balok(34, 10));
console.log(balok(34, 10, 10));

console.log("a", "b", "c", "d");

myFunc(1, 2);
myFunc(1, 2, 3, 4, 5);

function getMessage(firstName) {
  function sayHello() {
    return "Hello " + firstName + ".";
  }

  function welcomeMessage() {
    return "Welcome to Purwadhika!";
  }

  return sayHello() + " " + welcomeMessage();
}

function greeting(name) {
  const defaultMessage = "Hello";

  return function () {
    return defaultMessage + name;
  };
}

const message = getMessage("David");
console.log(message);

// const greetingDavid = greeting("David");
// console.log(greetingDavid());

const greetingDavid = greeting("David");

console.log(greetingDavid());

function multiplier(factor, number) {
  return number * factor;
}

console.log(multiplier(5, 3));
console.log(multiplier(10, 3));

function multiplier2(factor) {
  return function (number) {
    return number * factor;
  };
}

function balok2(p) {
  return function (t) {
    return function (l) {
      return p * l * t;
    };
  };
}

console.log(multiplier2(5)(3));
console.log(balok2(10)(8)(5));

// function countDown(fromNumber) {
//   console.log(fromNumber);

//   let nextNumber = fromNumber;

//   if (nextNumber > 0) {
//     countDown(nextNumber);
//   }
// }
// 1
function factorial(num) {
  //   2
  if (num > 1) {
    // 2  * fn(1)
    return num * factorial(num - 1);
  } else {
    // 1 * 1
    return num * 1;
  }
}

const balok3 = (p, l, t) => {
  return p * l * t;
};

function Person() {
  function constructor() {
    console.log("hello person ");
  }
}

const Person2 = () => {
  console.log(this);
};

const Person3 = () => "Rian"; // Rian sebagai return
/*
const balok3 = (p, l, t) => {
  return p * l * t;
};


function balok2(p) {
  return function (t) {
    return function (l) {
      return p * l * t;
    };
  };
}
*/
const balok4 = (p) => (l) => (t) => p * l * t;

// countDown(5);

console.log(factorial(2));
console.log(factorial(5));

console.log(balok3(4, 3, 2));

Person();
// Person2();
// console.log(Person3());
// console.log(balok4(10)(7)(5));

// var myName = "dimas";
// myName.hello = function () {
//   console.log("Hello => ".this);
// };

// myName.hello();
