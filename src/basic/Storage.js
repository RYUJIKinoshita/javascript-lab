// Storage
const KEY1 = 'key1';
localStorage.setItem(KEY1, 'value_0001');
const value1 = localStorage.getItem(KEY1);

const KEY2 = 'key2';
const obj = { a: 1, b: 2, c: 'something...' };
// localStorage.setItem(KEY2, obj); // [object Object]
// 文字列に変換することで格納可能
localStorage.setItem(KEY2, JSON.stringify(obj)); // {"a":1,"b":2,"c":"something..."}
