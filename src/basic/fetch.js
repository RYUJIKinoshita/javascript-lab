// fetch
console.log('start loading...');
// https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html

// fetchを使ってデータを取得する関数
async function getCatsData() {
  try {
    console.log('start getCatsData!!');
    const response = await fetch(
      'https://cat-fact.herokuapp.com/facts?animal_type=cat&amount=2',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

getCatsData().then(res => {
  console.log('finished getCatsData!!');

  // 必要な項目に絞って、JSON形式の文字列を取得、2文字で整形
  const catsOwners = JSON.stringify(res, ['_id', 'user', 'text'], 2);
  console.log(catsOwners);
});
console.log('processing....');
