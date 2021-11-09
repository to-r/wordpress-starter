const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PostCSSPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

// WordPressテーマ名
const THEME_NAME = 'to-r.co.jp';

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  entry: './src/main.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, `wp-content/themes/${THEME_NAME}/assets`),
  },
  plugins: [
    // CSSファイルを別ファイルで出力
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    // スタティックファイルのコピー
    new CopyPlugin({
      patterns: [
        {
          from: 'src/static',
          to: 'static',
        },
      ],
    }),
    // 外部ライブラリを利用するのでimport不要なもの
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.gsap': 'gsap',
    }),
    // 自動リロード
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8888',
      files: [`wp-content/themes/${THEME_NAME}/**/*`],
    }),
    // assets削除
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  PostCSSPresetEnv({
                    autoprefixer: { grid: 'autoplace' },
                  }),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
    gsap: 'gsap',
  },
};
