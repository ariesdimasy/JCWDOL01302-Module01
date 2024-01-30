/*

SET panjang EQUALS 7
SET lebar EQUALS 10

IF lebar MORE THAN panjang THEN
    DISPLAY "lebar tidak boleh lebih besar daripada panjang"
    EXIT

SET result EQUALS panjang MULTIPLY lebar 

PRINT result


==========================

SET panjang EQUALS 10
SET lebar EQUALS 6
SET tinggi EQUALS 8

SET area EQUALS panjang MULTIPLY lebar

SET volume EQUALS area MULTIPLY tinggi

PRINT volume

*/

let panjang = 10;
let lebar = 7;

let result = panjang * lebar;

console.log(result);

// ======================

let panjang1 = 10;
let lebar1 = 6;
let tinggi = 8;

let area = panjang1 * lebar1;

let result1 = area * tinggi;

console.log(result1);

// =========

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

let res = Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

console.log(res);

// =========

/*
    400 % 365 = 35
    Year : 1 
    35 % 30 = 5  
    Month : 1
    days 5
*/

let days = 366;
let year = Math.floor(days / 365);
let daysYearLeft = days % 365;
let month = Math.floor(daysYearLeft / 30);
let daysMonthLeft = daysYearLeft % 30;

console.log(`${year} year, ${month} month, ${daysMonthLeft} days`);
console.log(year + " year , " + month + " month, " + daysMonthLeft + " days");

console.log(18 % 4); // 4 , 18 -16 = 2
