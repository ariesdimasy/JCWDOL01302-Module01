let number = 9;

for (let i = 1; i <= number; i = i + 1) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// palindrome adalah kata yg susunan hurufnya di balik , lalu dibandingkan dengan kata asalnya akan sama
// aries --> seira ==> aries == seira X maka aries bukan palindrome

let name = "kasur ini rusak";
let res = ""; // menampung huruf dari belakang

// 6 , 5
for (let i = name.length - 1; i >= 0; i--) {
  res = res + name[i];
}

console.log(res == name);

let numKm = 1; // pembagi
let numCm = 1000; // pembagi
let num = 100_000; // cm
let satuan = "cm";

if (satuan == "cm") {
  num = num / numCm + " km";
}

if (satuan == "km") {
  num = num / numKm + " cm";
}

console.log(num);

let resName = "";
let firstname = "Aries";
let lastname = "Dimas";

resName = firstname + " " + lastname;

console.log(resName);

let str = "QUiCk bRoWn fOx";
let result2 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i].toLowerCase()) {
    result2 += str[i].toUpperCase();
  } else if (str[i] == str[i].toUpperCase()) {
    result2 += str[i].toLowerCase();
  } else {
    result2 += str[i];
  }
}

console.log(result2);
