const path = require("path");
const webpack = require('webpack')

module.exports = {
  runtimeCompiler: true,
  css: {
    extract: false
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    ]
  }
};
