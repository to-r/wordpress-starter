# WordPress Starter

## 開発方法

```sh
# 必要なモジュールをインストールします(初回のみ)
$ yarn install
# ローカル環境で WordPress を起動します
$ yarn run wp-env start
# browser-sync を起動します
$ yarn start
```

## ローカルサーバー

http://localhost:3000/

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
