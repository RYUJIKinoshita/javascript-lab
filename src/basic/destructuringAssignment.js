const arrySample = ['ABC', 2, 3, 'D', 'Efg'];
console.log(`arrySample:${arrySample}`);

// 分割代入の宣言
const [strA, , , strB, strC] = arrySample;
console.log(`strA:${strA}`);
console.log(`strA:${strB}`);
console.log(`strA:${strC}`);

const objSample = { key1: 'ABC', key2: 123, key3: 'Efg' };
console.log(`objSample:${JSON.stringify(objSample)}`);

const { key1, key3 } = objSample;
console.log(`key1:${key1}`);
console.log(`key3:${key3}`);
