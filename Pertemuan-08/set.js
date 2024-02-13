const fruits = ["ope-ope", "gomu-gomu", "hana-hana", "bara-bara", "hana-hana"];

const newFruits = new Set(fruits);

console.log(newFruits);

newFruits.add("gura-gura");
newFruits.add("magu-magu");
newFruits.add("mera-mera");

console.log(newFruits);

newFruits.add("gura-gura");
newFruits.add("yami-yami");

console.log(newFruits);
console.log(newFruits.size);
console.log(newFruits.has("mera-mera"));
console.log(newFruits.has("hito-hito"));
