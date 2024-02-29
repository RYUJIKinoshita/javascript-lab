const checkType = checkVal => {
  console.log(checkVal, `typeof is ${typeof checkVal}.`);
};

// プリミティブ型
checkType(123);
checkType('ABC');
checkType(true);
checkType(BigInt('987654321098765432109876543210'));
checkType(undefined);
checkType(null); //nullは、object型となってしまう。。
checkType(Symbol('sample-symbol'));
const symbol1 = Symbol('sample-symbol');
const symbol2 = Symbol('sample-symbol');
console.log(`symbol1 == symbol2 is ${symbol1 == symbol2}`);
console.log(`symbol1 === symbol2 is ${symbol1 === symbol2}`);

// プリミティブ型以外
checkType(function discount(price) {
  return price * 0.9;
});
checkType(price => {
  return price * 0.9;
});
checkType({ key: 1000 });
checkType([1, 2, 3, 4, 5]);
const discount = price => {
  return price * 0.9;
};
checkType(discount);
checkType({
  price: 1000,
  getPrice: () => {
    return this.price * 1.1;
  },
});

// const fnc = {
//   costPrice: 1000,
//   getCostPrice: () => {
//     return this.costPrice * 1.1;
//   },
// };
// console.log(fnc.getCostPrice()); // thisはwindowオブジェクトになるため、0 * 1.1 -> 0

// window.costPrice = 2000;
// console.log(fnc.getCostPrice()); // 2200
