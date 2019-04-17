const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, './dist'),
  runtimeCompiler: true,
  css: {
    extract: false
  },

  // chainWebpack: config => {
  //   config.resolve.alias.set("pages", path.resolve(__dirname, "src"));
  //   config.performance.hints(false);

  //   // 清除默认的App.vue入口
  //   config
  //     .entry("app")
  //     .clear()
  //     .end();

  //   // 使用新的入口
  //   config
  //     .entry("idp_main")
  //     .add("./src/idp_main/index.vue")
  //     .end()
  //     .entry("idp_main_for_nurse")
  //     .add("./src/idp_main_for_nurse/index")
  //     .end();

  //   // 强制压缩成一个文件
  //   config.optimization.splitChunks({
  //     minChunks: Infinity
  //   });

  //   // 内联所有图片
  //   config.module
  //     .rule("images")
  //     .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .options({
  //       limit: Infinity
  //     });

  //   // 内联 web font
  //   config.module
  //     .rule("fonts")
  //     .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .options({
  //       limit: Infinity
  //     });
  // }
};
