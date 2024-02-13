let obj = {
  name: "Dimas",
  title: "lecturer",
  teach() {
    //console.log(this);
    console.log(this.name, " lecturing ...");
  },
  hobbies: [],
  key: "another key",
  //   address: {
  //     city: "kab. tangerang",
  //     province: "banten",
  //   },
};

let key = "animes";

console.log(obj);

console.log(obj.name);
console.log(obj["title"]);

obj.teach();

obj.hobbies.push("rocket league");

console.log(obj);

delete obj.hobbies;

console.log(obj);

obj.animes = ["jjba", "gintama", "doraemon"];

console.log(obj);

console.log(obj[key]); //["jjba", "gintama", "doraemon"];
console.log(obj["key"]);

// let obj2 = new Object({});
console.log(obj.address); // undefined

console.log(obj.address?.city);

console.log(obj.address ? obj.address.city : obj.address);

console.log(Object.keys(obj));

for (let key in obj) {
  console.log(key, ":", obj[key]);
}

// built in method
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("dimas"));

// let a = 10
// let b = 20

let [a, b] = [10, 20];

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);

const person = { name: "budi", age: 20 };

// const name = person.name;
// const age = person.age;
// const { name, age } = person;

// console.log(name);
// console.log(age);

const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];

// console.log(dataOne.concat(dataTwo));

const finalData = [...dataOne, ...dataTwo];
console.log(finalData);

obj.teach();

let name = "rian";
let name2 = name;

console.log(name2);

name = "rizky";
console.log(name2);

let obj2 = { foo: "bar", lorem: "ipsum" };
let target = { foo: "key", age: 34 };

// obj2.foo = "foo value";
let obj3 = Object.assign(target, obj2);

console.log(target);

// console.log(obj3);

// console.log(obj3);

// let obj4 = Object.create(obj2);

// console.log(obj4.foo);

// obj4.foo = "foo";

// console.log(obj4.foo);

// let obj4 = Object.entries(obj2);

// console.log(obj4);

// Object.freeze(obj2);

// obj2.foo = "foo value";

// console.log(obj2.foo);

// console.log(Object.is(12, 12));
