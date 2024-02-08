let person = { name: "david", age: 20, key: "secret" };

// let key = "name";
// let name = "name2";

// console.log(person["name"]);
// console.log(person[key]);
// console.log(person["key"]);

// let newPerson = {};

// newPerson[key] = "another secret";
// newPerson["key"] = person["key"];
// // key              // secret

// console.log(newPerson);
let newObj = {};

for (let key in person) {
  //console.log(person[key], ":", key);
  newObj[person[key]] = key;
}

console.log(person);
console.log(newObj);
