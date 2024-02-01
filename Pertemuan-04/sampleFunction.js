let name = "dimas";
hello();
function hello() {
  console.log("hello 1 " + name);
}

const hello2 = () => {
  console.log("hello 2 " + name);
};
hello2();

console.log(isFinite(2), isFinite(Infinity));
console.log(isNaN(85), isNaN("tes"));

console.log(String([1, 2, 3]));
