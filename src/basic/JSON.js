// JSON
const obj = { a: 1, b: 2, c: 'something...' };
console.log(obj, typeof obj); // {a: 1, b: 2, c: 'something...'} object

const strJson = JSON.stringify(obj);
console.log(strJson, typeof strJson); // {"a":1,"b":2,"c":"something..."} string

const objJson = JSON.parse(strJson);
console.log(objJson, typeof objJson); // {a: 1, b: 2, c: 'something...'} object

// stringifyの引数で利用するreplacer
const replacer = (_, value) => {
  // 文字列の値は、対象外
  if (typeof value === 'string') {
    return;
  }
  return value;
};
let parsedJson = JSON.stringify(obj, replacer);
console.log(parsedJson, typeof parsedJson); // {"a":1,"b":2} string

// プロパティを指定
parsedJson = JSON.stringify(obj, ['a', 'c']);
console.log(parsedJson, typeof parsedJson); // {"a":1,"c":"something..."} string
