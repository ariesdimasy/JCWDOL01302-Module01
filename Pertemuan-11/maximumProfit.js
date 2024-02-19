function maximumProfit(stocks) {
  let maxProfit = 0;
  for (let i = 0; i < stocks.length; i++) {
    for (let j = i + 1; j < stocks.length; j++) {
      if (stocks[j] - stocks[i] > maxProfit) {
        maxProfit = stocks[j] - stocks[i];
      }
    }
  }

  return maxProfit;
}

console.log(maximumProfit([7, 1, 5, 3, 6, 4]));
console.log(maximumProfit([7, 6, 4, 3, 1]));
