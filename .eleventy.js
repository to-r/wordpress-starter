const path = require("path");

const THEME_PATH = "wp-content/themes/my-theme";

module.exports = (config) => {
  // const manifestPath = path.resolve(__dirname, "manifest.json");

  // nunjucks settings
  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });

  config.addPassthroughCopy(path.join(THEME_PATH, "static/assets/js"));
  config.addPassthroughCopy(path.join(THEME_PATH, "static/assets/img"));
  config.addPassthroughCopy(path.join(THEME_PATH, "static/assets/css"));

  config.addWatchTarget(path.join(THEME_PATH, "static/assets/scss"));

  // BrowserSync Overrides
  config.setBrowserSyncConfig({
    ...config.browserSyncConfig,
    // Speed/clean up build time
    ui: false,
    ghostMode: false,
    open: "localhost",
    startPath: "/templates",
  });

  return {
    dir: {
      input: path.join(THEME_PATH, "static"),
      output: path.join(THEME_PATH, "html-template"),
      includes: "_includes",
    },
  };
};
