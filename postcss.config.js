module.exports = (ctx) => {
  return {
    map: ctx.options.map,
    plugins: {
      tailwindcss: {},
      "postcss-preset-env": {
        stage: 3,
        features: {
          "nesting-rules": false,
        },
        autoprefixer: {},
      },
    },
  };
};
