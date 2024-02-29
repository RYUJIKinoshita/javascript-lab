const checkCondition = checkVal => {
  if (checkVal) {
    console.log(`${checkVal} (typeof is ${typeof checkVal}) is Truthy!`);
  } else {
    console.log(`${checkVal} (typeof is ${typeof checkVal}) is Falsy!`);
  }
};

// Truthy
checkCondition(1);
checkCondition(true);
checkCondition('false');
checkCondition('0');
checkCondition({});
checkCondition([]);
checkCondition(new Number());
checkCondition(() => {});
checkCondition(checkCondition);
checkCondition(checkCondition(1));

// Falsy
checkCondition(0);
checkCondition(false);
checkCondition('');
checkCondition(undefined);
checkCondition(null);
checkCondition(NaN);

// ==と===の違い
console.log(`123 === "123"`, 123 === '123'); //false
console.log(`123 == "123"`, 123 == '123'); //true
