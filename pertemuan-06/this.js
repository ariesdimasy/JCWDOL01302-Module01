class Car {
  merk = "";
  color = "";
  price = "";

  setMerk(merk) {
    this.merk = merk;
  }

  getMerk() {
    return this.merk;
  }

  static hello() {
    console.log("hello");
  }
}

let bmw = new Car();
bmw.setMerk("BMW");

// let porche = new Car();

// console.log(bmw.merk);
// console.log(Car.hello());
console.log(merk);
