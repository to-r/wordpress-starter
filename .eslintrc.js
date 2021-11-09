module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    gsap: 'gsap',
  },
};
