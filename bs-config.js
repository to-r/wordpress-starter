const env = require("./.wp-env.json");
module.exports = {
  proxy: `localhost:${env.port}`,
  files: [`./**/*.{jpg,jpeg,gif,png,svg,php,css,js}`],
};
