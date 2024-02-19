function anagram(s, t) {
  let sortS = s.split("").sort().join("");
  let sortT = t.split("").sort().join("");

  return sortS === sortT;
}

function mySplit(word, splitter) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    result.push(word[i]);
  }

  return result;
}

console.log(anagram("nagaram", "anagram"));
console.log(anagram("rat", "car"));
console.log(anagram("car", "arc"));
// console.log("a" > "b");
// console.log("a" < "b");

console.log(mySplit("nagaram", ""));
