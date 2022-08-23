/* eslint-disable no-unused-vars */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDev ? "development" : "production",
  stats: {
    colors: true,
    preset: "minimal",
    children: true,
  },
  performance: { hints: isDev ? false : "warning" },
  devtool: isDev ? "cheap-module-source-map" : "source-map",
  entry: {
    "wordpress/wp-content/themes/my-theme/assets": [
      path.resolve(__dirname, "src/js/main.js"),
      path.resolve(__dirname, "src/scss/main.scss"),
    ],
    "site/webpack": [
      path.resolve(__dirname, "src/js/main.js"),
      path.resolve(__dirname, "src/scss/main.scss"),
    ],
  },
  output: {
    filename: "[name]/main.js",
    path: __dirname,
    publicPath: "/webpack/",
  },
  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]/main.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/static",
          to: "wordpress/wp-content/themes/my-theme/assets/static",
        },
        {
          from: "src/static",
          to: "site/webpack/static",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")({ grid: true })],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
