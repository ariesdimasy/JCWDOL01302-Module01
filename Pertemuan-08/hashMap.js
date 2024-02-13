// let obj = {
//   David: "001",
//   Buchanan: "002",
// };

// console.log(obj);

// console.log(obj.Buchanan);

const myMap = new Map();

myMap.set("david", "001");
myMap.set("Buchanan", "002");

console.log(myMap.has("david"));

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
