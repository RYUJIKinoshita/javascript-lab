# JavaScript 基本

- [JavaScript 基本](#javascript-基本)
  - [JavaScript とは？](#javascript-とは)
  - [ECMAScript とは？](#ecmascript-とは)
  - [実行環境(ランタイム)](#実行環境ランタイム)
  - [JavaScript エンジン](#javascript-エンジン)
  - [実行コンテキスト](#実行コンテキスト)
  - [コールスタック](#コールスタック)
  - [JavaScript でできること／できないこと](#javascript-でできることできないこと)
    - [できること](#できること)
    - [できない、苦手なこと](#できない苦手なこと)
  - [JavaScript と TypeScript の違い](#javascript-と-typescript-の違い)
  - [環境構築](#環境構築)
  - [パッケージ管理ソフト](#パッケージ管理ソフト)
  - [個人的に重要だと思う点](#個人的に重要だと思う点)
    - [真偽判定](#真偽判定)
    - [アロー関数](#アロー関数)
    - [コールバック関数](#コールバック関数)
    - [非同期処理](#非同期処理)
      - [非同期処理のチェーン](#非同期処理のチェーン)
      - [Promise](#promise)
      - [async/await](#asyncawait)
    - [オブジェクト](#オブジェクト)
    - [特別なオブジェクトやライブラリの紹介](#特別なオブジェクトやライブラリの紹介)
      - [JSONオブジェクト](#jsonオブジェクト)
      - [Storage](#storage)
      - [axios](#axios)
      - [fetch](#fetch)
  - [参考文献](#参考文献)
    - [インプット学習用](#インプット学習用)
    - [アウトプット学習用](#アウトプット学習用)

## JavaScript とは？

- mozillaの学習用サイト[MDN WebDocs](https://developer.mozilla.org/ja/docs/Learn/JavaScript)からの定義を引用すると

``` text
JavaScript (JS) は軽量で、インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語です。
ウェブページでよく使用されるスクリプト言語として知られ、多くのブラウザー以外の環境、例えば Node.js や Apache CouchDB や 
Adobe Acrobat などでも使用されています。
  JavaScript はプロトタイプベースで、マルチパラダイムで、シングルスレッドで、動的な言語であり、オブジェクト指向、
命令型、宣言型（関数プログラミングなど）といったスタイルに対応しています。
```

- プロトタイプベース：オブジェクト指向言語でオブジェクトを定義する際に複製元となるオブジェクトをプロトタイプという。
- 第一級関数を備えたプログラミング言語：関数がその他の変数と同様に扱うことができる。
- スクリプト言語：簡易的なプログラミング言語の一種。シェルスクリプト、Python、Ruby、PHP、

## ECMAScript とは？

JavaScript (Netscape) や JScript (Microsoft)のCoreな部分から仕様としてまとめられたもの。
現状、実装はJavaScriptのみのようです。
この標準仕様の作成に至った経緯などは、下記のページに紹介されています。
ECMAScript(ES)の第５版(ES5,2009)、第６版(ES6,ES2015)で大きく仕様が変更されている。
参考：[ecma international](https://tc39.es/ecma262/)

## 実行環境(ランタイム)

- JavaScriptはブラウザ、マシン上で実行される。

- ブラウザ
  - Google Chrome や Edge、FireFox、Safari など

- マシン上
  - ローカル環境やサーバサイドにて Node.js などで実行される
    - Node.js、Deno、Bun など

- 実行環境ごとで利用できる機能が違う！
  | 機能 |ブラウザ | Node.js |
  |---|:---:|:---:|
  | ECMAScript の標準機能 | 〇 | 〇 |
  | ESModule | 〇 |〇 |
  | CommonJS | × | 〇 |
  | ブラウザ API | 〇 | × |

  - Module：複数のJavaSciptファイルを取り込む仕様
  - ESModule：ECMAScriptの仕様に基づいたモジュール管理の仕組み。CommonJSの上位互換。
    - import/export
  - CommonJS：サーバーサイドなどのウェブブラウザ環境外におけるJavaScriptの仕様を定めたもの。
    - Node.jsは、CommonJSがデフォルトであったが、現在はESModuleにも対応している。
    - require/module.exports
  - ブラウザ API：ブラウザが提供する機能や操作をJavaScriptから利用するためのAPI。Dom操作やWeb Storageの操作を行う。
    - Node.jsなどでは、利用できない。

## JavaScript エンジン

JavaScript のランタイム（実行環境）で実行されるプログラム
JavaScript エンジン以外にもランタイムで利用されている仕組みがあるが割愛します。[参考記事](https://zenn.dev/msy/scraps/1490bd249046ce)

- JavaScript のコード解析し、マシンコードにコンパイル(JIT:just-in-time compiler)し、実行する
- 主なエンジン
  - V8
    - Google によって開発された最も使用されているエンジン。
    - Google Chrome、Microsoft Edge、Node.js、Electron などで利用
  - SpiderMonkey
    - Firefox で利用
  - JavaScriptCore
    - Apple の Safari 向けのエンジン。

## 実行コンテキスト

[参考記事](https://zenn.dev/shava2c/articles/73aa39dc89233e)

コードの実行時評価を追跡するために使用される機構
JavaScriptエンジン がコードを受信すると、そのJavaScript コードの変換と実行を処理するための特別な環境（＝これが、実行コンテキスト）を作成する。
実行コンテキストには、３つの種類がある。

- グローバルコンテキスト (Global context)：
  - 実行中のコンテキスト内の「関数」「変数」、「グローバルオブジェクト」、「this」が準備され、利用可能。
  - 関数の外側に存在するあらゆるコードは、それが実行される際にグローバルコンテキストが作成される。
  - ブラウザでは window オブジェクトがグローバルオブジェクトとなる。

- 関数実行コンテキスト/関数コンテキスト：
  - 実行中のコンテキスト内の「関数」「変数」、「arguments」、「this」、「super」、「外部変数」が順義され、利用可能。
  - 各関数は、それ自身の実行コンテキスト内で実行される。

- Eval実行コンテキスト：非推奨な関数である eval() 関数によって作成される実行コンテキスト。気にしなくて良い。

## コールスタック

- 実行中のコードがたどってきたコンテキストの積み重ね。
- どの関数がどの順序で呼び出されたかを追跡するデータ構造。
- DeveloperToolsで確認可能
  - 匿名：グローバルコンテキスト、スタックされた関数名が確認可能

## JavaScript でできること／できないこと

### できること

- ウェブページの操作
  - JavaScriptはウェブページのDOM（Document Object Model）を操作可能
    - ユーザーの操作に応じてウェブページの内容を動的に変更させたり、アニメーションを追加したりすることが可能
      - Canvas APIやWebGLを使って、JavaScriptは2Dや3Dのグラフィックを描画したり、アニメーションを作成可能
      - Web APIと連携して、ウェブページの動的な操作やデータの取得・送信などを行うことが可能

- 非同期通信
  - サーバーと非同期通信を行うことが可能。
    - ページ全体をリロードせずに部分的なデータの更新や取得が可能。
      - SPA（Single Page Application）の構築に利用される

- サーバーサイドのプログラミング
  - Node.jsなどのランタイムを使用することで、サーバーサイドのプログラミングも行うことが可能
    - データベースの操作やファイルの読み書きなどが可能

- モバイルアプリケーションの開発
  - React NativeやIonicなどのフレームワークを使って、モバイルアプリケーションの開発が可能

- デスクトップアプリケーションの開発
  - ElectronやNW.js（旧名：node-webkit）、Proton Native を使って、デスクトップアプリケーションの開発が可能

### できない、苦手なこと

- マルチスレッドの処理
  - シングルスレッドで動作するため、複数のスレッドを同時に実行することはできない。
    - ただし、Web WorkersやNode.jsのworker_threadsモジュールなどを使うことで、バックグラウンドで並行処理を行うことは可能

- 低レベルなシステムアクセス
  - セキュリティの観点から、直接的なファイルシステムの操作やネットワークの制御、メモリ管理などの低レベルなシステムアクセスを制限されている

- 高性能な計算
  - CPUやGPUを直接操作する能力が限られているため、高性能な計算や大規模なデータ処理には向いていない。
    - WebAssemblyなどの技術を利用することで、一部の高性能な計算をブラウザ上で行うことが可能になってきている。

- 動的型付け言語
  - 実行しないと型の問題がわからない。
  - TypeScriptを利用することで解消可能　 

- ブラウザによる動作の違い
  - ブラウザ上で動作させる場合、使用しているブラウザによって動作に差が生じることがある。

- パフォーマンス
  - JavaScriptを多用すると、Webサイトのパフォーマンスが落ちる可能性がある

- セキュリティリスク
  - クライアントサイドで実行される場合、セキュリティリスクがある

- 互換性
  - 進化が早い言語のため、WebブラウザのバージョンやNode.jsのバージョンによって利用できない記述がある場合がある

## JavaScript と TypeScript の違い

JavaScript(JS)：動的型付け言語
TypeScript(TS)：静的型付け言語

  | 機能 |JS | TS |
  |---|:---:|:---:|
  | 型付け | 動的 | 静的 |
  | Interfaceの対応 | × |〇 |
  | 高度な型機能 | × | 〇 |
  | コンパイルでのエラー検知 | × | 〇 |

``` javascript
// javascript
function add(a, b) {
  return a + b;
}
const strTwo = "2";
console.log(add(1, strTwo)); 
>12 // 数値の1と文字列の"2"が結合される
```

``` typescript
// typescript
function add(a: number, b: number): number {
  return a + b;
}
const strTwo = "2";
console.log(add(1, strTwo));// コンパイルエラーが発生 Argument of type 'string' is not assignable to parameter of type 'number'.

```

## 環境構築

- VSCode
  - 拡張機能
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
      - .prettierrcで詳細設定
    - 設定例

    ``` json
    // .vscode\settings.json
    {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
      }
    }
    // .prettierrc
    {
        "singleQuote": true,
        "tabWidth": 2
    }
    ```

    - [LiveServer](https://github.com/ritwickdey/vscode-live-server)
      - ローカル用Webサーバー。ソースを変更すると自動でリロードされて便利。

  - 自動補完機能(Emmet)
    - VSCodeに最初からインストールされている。
    - [Emmetチートシート](https://docs.emmet.io/cheat-sheet/)

## パッケージ管理ソフト

- JavaScriptのみの開発であれば不要
- Node.jsを利用する際に利用
- npm、yarn、pnpm などを利用してパッケージとそのバージョンを管理する
- インストールされたパッケージは、依存するパッケージを含めて、node_modules へ格納される。
- npm
  - Node.jsと一緒にインストールされる。
  - package.jsonでパッケージを管理
  - package.json-lockでパッケージと依存関係を管理
- yarn
  - npmと互換性あり。
  - npmよりも高速でセキュリティが強化されているらしい。
  - package.jsonを利用可能
  - yarn.lockでパッケージと依存関係を管理
- pnpm
  - pnmより高速にパッケージをインストール可能
  - pnmよりパケージの依存関係の管理が厳格

## 個人的に重要だと思う点

### 真偽判定

真：true、0以外の数値、文字列の"0"。
偽：false、数値の0、空文字列('')、null、undefined、NaN

===:厳密等価演算子、型変換を行わずに値を比較する。値も型も同じである場合にのみtrueとなる。
==：等価演算子、比較する前に型を自動的に変換する。抽象的な等価性の確認に利用。

``` js
"123" === 123 → false
"123" == 123 → true
```

### アロー関数

無名関数を省略して記述する記法。

1. 関数キーワードの省略：アロー関数では、functionキーワードを使用しない。
2. 引数の定義：括弧()の中に引数を定義。
   引数が1つだけの場合、括弧を省略することも可能（ただし、引数がない場合や複数の引数がある場合は括弧が必要）。
3. アローの追加：引数の後にアロー => を追加。
4. 関数の本体：アローの後に関数の本体を記述。関数本体が一行の場合、波括弧{}を省略することも可能。
　 また、波括弧を省略した場合、その一行は自動的にreturnされる。

``` js
// 関数：再利用したい処理に適している。
function sample(price, quantity){
  return price * quantity;
}
  ↓
// 無名関数：コールバック関数やイベントトリガーで実行される関数に適している。
const sample = function(price, quantity){
  return price * quantity;
}
  ↓
// アロー関数：無名関数の省略版なので、利用シーンは無名関数と同じ。
const sample = (price, quantity) => {
  return price * quantity;
}

```

※関数と無名関数・アロー関数では、thisキーワードの挙動が違う！今回は割愛。

### コールバック関数

関数（親関数）に引数として渡され、親関数の中で特定のタイミングで呼び出される関数のこと
コールバック関数の例として、組み込み関数のsetTimeoutを引用。
[setTimeoutの仕様](https://developer.mozilla.org/ja/docs/Web/API/setTimeout)

``` js
// JavaScriptの組み込み関数
// ミリ秒経過後に関数を実行する。この引数の関数が「コールバック関数」になる。
// また、setTimeoutは非同期処理でもあるので、setTimeoutの実行は、他の関数の実行を停止させません。
setTimeout(関数, ミリ秒,[関数の引数,,,]);
```

### 非同期処理

JavaScriptは、メインスレッドで「Scriptの実行」と「画面への描写（レンダリング）」が行われる、シングルスレッドプログラム。
非同期APIを利用することで、メインスレッドから一時的に分離された状態で非同期処理が実行される。
コールスタック、イベントループ、タスクキューを利用し、下記のような仕組みになっています。

- コールスタック：呼び出された関数を「後入れ先出し」方式で格納している。
- タスクキュー：非同期処理のキュー（待ち行列）。
- イベントループ：タスクキューを監視し、キューが追加されたことを検知する。同時にコールスタックの監視し、コールスタックが空になるとタスクキューへ通知。
　タスクキューが先頭のキューをコールスタックへ追加し、メインスレッドで実行される。

- [参考記事](https://zenn.dev/rinda_1994/articles/fb5304da03d5d7)

#### 非同期処理のチェーン

非同期処理を連続して実行する場合、非同期の関数を連続して実行することで実現可能

#### Promise  

非同期処理を簡潔に記述可能。可読性もよくなる。

``` js
new Promise((resolve, reject) => {
    // 非同期処理の実行
    // 成功時は resolve() を呼ぶ
    // 失敗時は reject() を呼ぶ
}).then((result) => {
    // コールバック処理
    // resolve()の引数がresultへ渡たる。
    // return Promise.rejectもしくは、throw することでcatchされる。
    return result
}).then((result) => {
    // コールバック処理
    // 前のthenのreturn が引数resultへ渡る
    return result
}).catch(((error) => {
    // エラー時の処理
    // reject()の引数がerrorへ渡たる。
}).finally(()>={
    // 正常、エラー共通で実行したい後処理を記述
    // 省略可
});
```

#### async/await  

非同期処理をさらに簡潔に記述可能。
関数処理に限り利用可能。

- async：Promiseを返却する関数の宣言を行う
- await：Promiseを返却する関数の非同期処理が完了するまで、待つ

``` js
// asyncをつけた関数内で非同期処理を実行
async function fetchData() {
    try {
      // awaitでPromiseを返す処理を記述する。
      // Promiseが解決されるまで関数の実行を待つ。
      const result = await fetch('https://api.example.com/data');
      const data = await result.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}
```

### オブジェクト

JavaScriptは、プリミティブ型以外のものはすべて"オブジェクト"として扱われる。
オブジェクト指向のオブジェクトではなく、object型で、``` {プロパティ名 : 値} ``` の形で表現されるデータ型のことです。
値には、プリミティブ型、他のオブジェクト(変数、関数オブジェクトなど)が格納可能。
プリミティブ型には、boolean、number、string、bigInt、symbol、undefined、nullの7つがあります。

※注意※
typeof で変数の型を確認できるが、typeof null は、```object```を返す。JavaScriptの不具合なので、注意が必要。

### 特別なオブジェクトやライブラリの紹介

#### JSONオブジェクト

- JSONは、文字列。
- プロパティ名も""で囲われている。
  - オブジェクトでは、プロパティ名は、""で囲われない。
- JSON.stringify(obj)
  - 引数のobjectをJSONに変換
- JSON.parse(json)
  - 引数のJSONをオブジェクトに変換
- [公式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

``` js
const obj = { a: 1, b: 2, c: 'something...' }; // {a: 1, b: 2, c: 'something...'} object
const strJson = JSON.stringify(obj); // {"a":1,"b":2,"c":"something..."} string
const objJson = JSON.parse(strJson); // {"a":1,"b":2,"c":"something..."} string
```

#### Storage

- ブラウザの保存領域にデータを格納するためのオブジェクト
  - localstorageを利用する
- Web Storage APIを利用する。
- [公式](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

#### axios

- HTTP通信（データの更新・取得）を簡単に行うためのライブラリ
- ブラウザと Node.js のための PromiseベースのHTTPクライアント
- インストールが必要　→　importが必要。HTMLからは、scriptでの読み込みが必要。
- CRUD操作ごとにメソッドが分かれており、使いやすい。
- Responseからdataを参照するとJSONで取得可能
- エラーハンドリングされる
  - 400系、500系は、異常となる。
- [公式](https://axios-http.com/ja/)

``` js
// 実装例
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

```

#### fetch

- ブラウザのネイティブAPIで、HTTPリクエストを行うための標準的なJavaScriptメソッド
- axiosに比べて利用しにくいが、インストールなどなく利用可能。
- エラーハンドリングが特殊
  - レスポンスが取得できれば、正常扱い。400系、500系も正常扱い。
- サーバ内のJSONファイルを読み込むといった簡易的なI/Oに向いている。
- [公式](https://developer.mozilla.org/ja/docs/Web/API/fetch)

``` js
const myImage = document.querySelector("img");

const myHeaders = new Headers();
myHeaders.append("Accept", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg");

fetch(myRequest, myInit).then((response) => {
  // …
});
```

## 参考文献

基本、無料で利用可能な有用サイトです。

### インプット学習用

- [MDN WebDocs](https://developer.mozilla.org/ja/docs/Learn/)
  - Web開発に関する技術要素ごとに学ぶことが可能。
  - mozillaの公式サイト、日本語版を紹介しているが、英語版で学ぶと、英語も学べてよりいいかも。

- [web.dev](https://web.dev/learn?hl=ja)
  - 上のサイトと同じ感じ。
  - 好みで選べばいいかも。

- [roadmap.sh](https://roadmap.sh/)
  - ITエンジニアとしてのロードマップの例を示してくれる。
  - 分野ごとのロードマップが示されているので自身のポートフォリオ形成の参考になると思う。

### アウトプット学習用

- [FreeCodeCamp](https://www.freecodecamp.org/)
  - 分野ごとに実際にコーディングしながら学ぶことができる。
  - 無料で利用可能。
  - その分野に関する認定証の取得も可能。
  - 日本語対応

- [MyW3Schools](https://www.w3schools.com/)
  - JavaScript、HTML、CSS、Pythonなどの言語のチュートリアルや練習問題を行うことで、カテゴリごとに学ぶことができる。
  - 無料で利用可能

- [WebDesigner-Go](https://webdesigner-go.com/coding-practice/)
  - Webデザイナー向けの練習サイト
  - FigmaやAdobeのXD製品を利用してサイトを構築する
