// 関数
function priceFnc(unitPrice, quantity) {
  return unitPrice * quantity;
}

// 関数式(無名関数)
const priceAnonymousFunc = function (unitPrice, quantity) {
  return unitPrice * quantity;
};

// アロー関数１段階
// functionを消し、=> を追加
const priceArrow1 = (unitPrice, quantity) => {
  return unitPrice * quantity;
};

// アロー関数２段階
// 処理が１行の場合は、{} と return が不要
const priceArrow2 = (unitPrice, quantity) => unitPrice * quantity;

// アロー関数３段階
// 引数が１つの場合は、()が不要
const priceArrow3 = unitPrice => unitPrice * 1.1;

// コールバック関数
const delay = 2000;
setTimeout(
  time => {
    console.log('Called!', `${time / 1000} 秒経過しました！`);
  },
  delay,
  delay,
); // 第１引数：アロー関数、第２引数：経過時間、第３引数：アロー関数への引数
