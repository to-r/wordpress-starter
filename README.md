# WordPress Starter

## 開発方法

`theme` ディレクトリ名はプロジェクトに応じて変更してください。

```sh
# 必要なモジュールをインストールします(初回のみ)
$ yarn install
# ローカル環境で WordPress を起動します
$ yarn run wp-env start
# webpack を起動します
$ yarn start
# http://localhost:3000 でローカルサーバーが起動します
```

### データベースの操作

```sh
# DBのエクスポート
$ yarn run wp-env run cli wp db export sql/db.sql

# DBのインポート
$ yarn run wp-env run cli wp db import sql/db.sql
```

## フォルダ構成

`theme/*`  
開発するテーマファイル一式。

`plugins/*`  
ローカルから利用したい WordPress プラグイン。`.wp-env.json` にもパスを追記してください。

`src/*`  
テーマ開発で利用する JavaScript ファイルと SCSS ファイル。

## WordPress の開発

[@wordpress/env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) を利用します。詳細はドキュメントを確認してください。
