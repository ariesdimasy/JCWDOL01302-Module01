function triangelPattern(height) {
  let counter = 1;
  // looping jumlah baris

  for (let i = 1; i <= height; i++) {
    let row = "";
    // looping jumlah item based on baris keberapa
    for (let j = 1; j <= i; j++) {
      row += (counter < 10 ? "0" : "") + counter + " ";
      counter++;
    }

    console.log(row);
  }
}

triangelPattern(4);
// triangelPattern(10);
/*
    tinggi = 4 
    per baris , adalah jumlah perulangan item / sama ngan jumlah item 
    item nya selalu meningkat dari jumlah item sebelumnya per baris 

    1 -> 1
    2 -> 3 
    3 -> 6 
    4 -> 10
    5 -> 15
    6 -> 21
*/
