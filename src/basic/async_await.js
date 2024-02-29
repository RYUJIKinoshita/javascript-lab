// promise
const sleep = val => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(val++);
      if (val > 5) {
        reject('[Error]Range over!');
      } else {
        // resolveへ渡したvalが、次のthenの引数に設定される
        resolve(val);
      }
    }, 1000);
  });
};

console.log('promise sleep start!');
sleep(0) //0
  .then(val => {
    return sleep(val); //1
  })
  .then(val => {
    return sleep(val); //2
  })
  .then(val => {
    return sleep(val); //3
  })
  .then(val => {
    return sleep(val); //4
  })
  .then(val => {
    return sleep(val); //5
  })
  .then(val => {
    return sleep(val); //6
  })
  .then(val => {
    return sleep(val); //7
  })
  .catch(err => {
    console.error(err); //Error
  })
  .finally(() => {
    console.log('promise sleep finished!');
  });

// async、await.jsを利用
async function doSleep() {
  console.log('async doSleep start!');
  try {
    let count = await sleep(0); // 0
    count = await sleep(count); // 1
    count = await sleep(count); // 2
    count = await sleep(count); // 3
    count = await sleep(count); // 4
    count = await sleep(count); // 5
    count = await sleep(count); // 6
    count = await sleep(count); // 7
  } catch (err) {
    console.error('[ERROR]async doSleep failed!!');
  } finally {
    console.log('async doSleep finished!');
  }
}
doSleep();
