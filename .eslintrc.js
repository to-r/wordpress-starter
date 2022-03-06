// eslint-disable-next-line no-undef
module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
};
