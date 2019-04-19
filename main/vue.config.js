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
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/test': {
        target: 'http://127.0.0.1:7070',
        changeOrigin: true,
      }
    },
  },
};
