const path = require("path");

module.exports = (config) => {
  const manifestPath = path.resolve(__dirname, "manifest.json");

  // nunjucks settings
  config.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });

  // BrowserSync Overrides
  config.setBrowserSyncConfig({
    ...config.browserSyncConfig,
    // Reload when manifest file changes
    files: [manifestPath],
    // Speed/clean up build time
    ui: false,
    ghostMode: false,
  });

  return {
    dir: { input: "src/njk", output: "site", includes: "_includes" },
  };
};
