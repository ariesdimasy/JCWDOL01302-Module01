class User {
  name = "";
  constructor(name) {
    this.name = name;
  }
  greting() {
    console.log(this.name, " hello world");
  }
}

let dimas = new User("dimas");
let rian = new User("rian");

console.log(dimas);
console.log(rian);

dimas.greting();
rian.greting();

const User2 = class {
  greeting() {
    console.log("hello expression");
  }
};

let rian2 = new User2();

console.log(rian2);

console.log(typeof 2);
console.log(typeof [1, 2, 3]);
console.log(typeof { foo: "bar" });
console.log(typeof function myname() {});
console.log(typeof User);

function User3(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log(this.name, " from function ");
  };
}

let rizky = new User3("rizky", 30);

console.log(rizky);

rizky.greeting();
