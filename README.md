# WordPress Starter
 
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

`theme/*`  
開発するテーマファイル一式。

`plugins/*`  
ローカルから利用したい WordPress プラグイン。`.wp-env.json` にもパスを追記してください。

`src/*`  
テーマ開発で利用する JavaScriptファイルとSCSSファイル。

## WordPress の開発

[@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) を利用します。詳細はドキュメントを確認してください。

- browser-sync を利用するのでポート番号は変更しないでください。

## データベースの共有について

- [All-in-One WP Migration](https://ja.wordpress.org/plugins/all-in-one-wp-migration/) を利用して、リモートサーバー経由で他メンバーとデータベースを共有しましょう。
