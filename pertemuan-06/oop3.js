class User {
  #name = "anonim";
  #age = 0;

  set setName(name) {
    if (name) {
      this.#name = name;
    } else {
      console.log("name is invalid");
    }
  }

  get getName() {
    return this.#name;
  }

  greeting() {
    console.log(`Hello ${this.name} `);
  }
}

let dimas = new User();

// dimas.name = "dimas";

// dimas.setName("aries dimas");
dimas.setName = "";

console.log(dimas.getName);
console.log(dimas);
