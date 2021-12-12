const path = require("path");
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  watchOptions: {
    // 最初の変更からここで設定した期間に行われた変更は1度の変更の中で処理が行われる
    aggregateTimeout: 200,
    ignored: '**/node_modules',
    // ポーリングの間隔
    poll: 1000
  },

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    static: {
      directory: path.join(__dirname, "dist"),
    },    
    host: '0.0.0.0',
    hot: true,
    open: true,
    port: 8080,


    // static: "dist",
    // hot: true,
    // // ローカルホスト以外からアクセスするにはIPアドレスからアクセスできるようにします。IPアドレスからアクセスするには --host 0.0.0.0 でwebpack-dev-serverを起動する
    // // webpack-dev-serverを動かすホストとポートを指定できます。
    // // デフォルトの8080は開発環境としてよく使われるポートなので、APIサーバなどが8080で別途動いているなどの場合は、書き換えてあげる必要があります。
    // host: '0.0.0.0',
    // port: 3001,
    //   // 任意のパスを別のサーバへプロキシさせることができます。プロキシ時にパスをリライトしたり、
    // // セキュリティの設定を付与するなどの細かい設定も可能です。
    // // 下記の場合、3000ポートでRailsなどのAPIサーバが立ち上がっているとき、
    // // APIへのリクエストもwebpack-dev-serverが動いている3001に対して投げても、Railsサーバ側にプロキシしてくれるわけです。
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // },
    // // ファイルの変更監視の方法を変更します。
    // // webpack-dev-serverでは通常、ファイルシステムを使って変更を検知するけど、NFSやvagrantを使っていると上手く行かないらしく、そういう場合に poll: true とすると変更をポーリングで検知できるようになるようです。
    // // watchOptions: {
    // //   poll: true
    // // },
    // // 初回ビルド完了時にブラウザでインデックスファイルを開いてくれます。
    // open: true
  },
  
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    // 省略すると/dist配下にmain.jsが出力される
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },

  // module: {
  //   rules: [
  //     {
  //       // 拡張子 .js の場合
  //       test: /\.js$/,
  //       use: [
  //         {
  //           // Babel を利用する
  //           loader: "babel-loader",
  //           // Babel のオプションを指定する
  //           options: {
  //             presets: [
  //               // プリセットを指定することで、ES2021 を ES5 に変換
  //               "@babel/preset-env",
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // // ES5(IE11等)向けの指定
  // target: ["web", "es5"],  
};