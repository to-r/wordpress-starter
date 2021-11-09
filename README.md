# WordPress Starter

WordPress と webpack を利用してテーマ開発をするスターターキットです。

## 開発する前に

以下の `to-r.co.jp` となっている個所を利用したいテーマフォルダ名に変更してください。

- .gitignore
- webpack.config.js
- .wp-env.json
- package.json
- `wp-content/themes/to-r.co.jp` (フォルダ名をリネーム)
- `wp-content/themes/to-r.co.jp/style.css` のコメント
 
## 開発方法

```sh
# 必要なモジュールをインストールします(初回のみ)
$ yarn install
# ローカル環境で WordPress を起動します
$ yarn run wp-env start
# webpack を起動します
$ yarn start
# http://localhost:3000 でローカルサーバーが起動します
```

## フォルダ構成

`wp-content/themes/:テーマ名`  
開発するテーマファイル一式。

`wp-content/plugins/*`  
ローカルから利用したい WordPress プラグイン。`.wp-env.json` にもパスを追記してください。

`src/static/*`  
画像やフォントなどテーマ開発の CSS や JavaScript で利用する静的ファイル。webpack が `wp-content/themes/:テーマ名/assets/static` 以下にコピーします。

`src/**/*.js`  
テーマ開発で利用する JavaScript ファイル。

`src/styles/**/*.scss`  
テーマ開発で利用する Scss ファイル。

## WordPress の開発

[@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) を利用します。詳細はドキュメントを確認してください。

- browser-sync を利用するのでポート番号は変更しないでください。
- `wp_enqueue_scripts` のバージョンは、`.wp-env.json` で定義しています。ほか、利用したい環境変数は `.wp-env.json` で定義してください。

## JavaScript の開発

- Babel と webpack を使っています。
- IE11 は対応していません。対応したい場合は別途設定の追加をしてください。
- jQuery と gsap に依存しています。グローバル変数で利用できる設定となっています。import も不要です。
- eslint でコードチェックを行っています。
- prettier でコードフォーマットをしています。

## CSS の開発

- webpack を使っています。
- IE11 は対応していません。対応したい場合は別途設定の追加をしてください。
- prettier でコードフォーマットをしています。

## browser-sync

`yarn start` を実行すると、browser-sync が `http://localhost:3000` で立ち上がります。**必ず `yarn run wp-env start` を実行してからbrowser-sync を起動してください。**

`wp-content/themes/:テーマ名/**/*` をウォッチしています。
