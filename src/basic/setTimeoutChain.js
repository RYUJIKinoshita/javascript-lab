// 非同期処理のチェーン。。。昔の書き方、現在は使用しない。

// 1秒後に、コールバック関数を実行する
const sleepFunc = (cb, count) => {
  setTimeout(() => {
    console.log(++count);
    cb(count);
  }, 1000);
};

sleepFunc(val => {
  console.log(`callback is done! ${val}`);
  // sleepFunc(val => {
  //   console.log(`callback is done! ${val}`);
  //   sleepFunc(val => {
  //     console.log(`callback is done! ${val}`);
  //   }, val);
  // }, val);
}, 0);

// 後置増分演算子・前置増分演算子
// let delay = 0;
// console.log('delay', delay);
// // 後置増分演算子：現在の値を返した後で＋１
// console.log('delay++', delay++);
// // 前置増分演算子：現在の値に＋１した後の値を返す
// console.log('++delay', ++delay);
