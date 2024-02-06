class User {
  name = "";
  #secret = "1234";

  static salary = 0;

  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hello ${this.name} `);
  }

  static getSalary() {
    console.log(User.salary);
  }
}

let dimas = new User("dimas");

console.log(dimas);

dimas.age = 30;

console.log(dimas);

dimas.run = function () {
  console.log(this.name + " is running ...");
};

dimas.run();

console.log(dimas.name);

console.log(dimas.salary);

// dimas.getSalary();

console.log(User.salary);
User.getSalary();
