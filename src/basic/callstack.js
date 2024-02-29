// グローバルコンテキスト
const valNum = 123;
const valStr = '123';

function step1() {
  // 関数コンテキスト
  const valNum = 100000;
  console.log(arguments.callee.name, arguments, this, valNum, valStr);
}
function step2() {
  // 関数コンテキスト
  const valNum = 200000;
  console.log(arguments.callee.name, arguments, this, valNum, valStr);
  window.valNum = 'This is string!';
  console.log('this.valNum', this.valNum);
  step1();
}
function step3() {
  // 関数コンテキスト
  const valNum = 300000;
  console.log(arguments.callee.name, arguments, this, valNum, valStr);
  console.log('this.valNum', this.valNum);
  step2();
}
step3();
