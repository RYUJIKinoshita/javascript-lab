// setTimeout ----------->>
const doFunc = label => {
  console.log('called doFunc!', label);
};

function doSomething() {
  setTimeout(doFunc, 4000, 'doSomething');
  doFunc('0000001');
}

doSomething();
setTimeout(doFunc, 2000, '0000002');
doFunc('0000003');
