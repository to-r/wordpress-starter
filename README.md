# WordPress Starter

## 開発方法

```sh
# 必要なモジュールをインストールします(初回のみ)
$ yarn install
# ローカル環境で WordPress を起動します
# WordPressテーマ開発しない場合は不要
$ yarn run wp-env start
# webpack を起動します
$ yarn start
```

## ローカルサーバー

### HTML 開発用

http://localhost:8080/

### WordPress テーマ開発用

http://localhost:8888/

### データベースの操作

```sh
# DBのエクスポート
$ yarn run wp-env run cli wp db export sql/db.sql

# DBのインポート
$ yarn run wp-env run cli wp db import sql/db.sql
```

## フォルダ構成

テーマディレクトリ名はプロジェクトに応じて変更してください。

`wordpress/wp-content/themes/[:テーマディレクトリ名]`  
WordPress テーマの開発。

`wordpress/wp-content/plugins`  
ローカルから利用したい WordPress プラグイン。`.wp-env.json` にもパスを追記してください。

`src`  
テーマ開発で利用する JavaScript ファイルと SCSS ファイルと画像などのスタティックファイル。
