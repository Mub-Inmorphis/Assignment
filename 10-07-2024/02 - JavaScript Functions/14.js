// Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount, coins) {
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
