const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PostCSSPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  entry: './src/main.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'wp-content/themes/to-r.co.jp/assets'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/static',
          to: 'static',
        },
      ],
    }),
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
};
