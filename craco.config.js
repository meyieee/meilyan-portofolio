// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Cari aturan source-map-loader
      const sourceMapLoader = webpackConfig.module.rules.find(
        (rule) =>
          rule.enforce === "pre" &&
          rule.use &&
          rule.use.loader === "source-map-loader"
      );

      if (sourceMapLoader) {
        // Kecualikan 'react-type-animation' dari source-map-loader
        sourceMapLoader.exclude = /node_modules\/react-type-animation/;
      }

      return webpackConfig;
    },
  },
};
