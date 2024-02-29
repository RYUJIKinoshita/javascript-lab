// Proiseを利用
new Promise((resolve, reject) => {
  // 非同期処理の実行
  let count = 0;
  console.log('Promise', ++count);

  if (count > 1) {
    reject('Unexpect value!!');
  } else {
    // 失敗時は reject() を呼ぶ
    resolve(count);
  }
})
  .then(result => {
    // コールバック処理
    // resolve()の引数がresultへ渡たる。
    console.log('then 1', ++result);
    return result;
  })
  .then(result => {
    // コールバック処理
    // 前のthenのreturn が引数resultへ渡る
    console.log('then 2', ++result);
    if (result > 1) {
      // return Promise.reject(new Error('then 2でエラーが発生しました'));
      throw new Error('then 2でエラーが発生しました');
    }
    return result;
  })
  .catch(error => {
    // エラー時の処理
    // reject()の引数がerrorへ渡たる。
    console.log(`Failure!! ${error}`);
  })
  .finally(() => {
    // 正常、エラー共通で実行したい後処理を記述
    console.log('Finally End.');
  });
