
export default function (js) {
  return new Promise((resolve) => {
    // 刷新页面时重新下载最新的JS文件
    $.getScript(`${js}?rand=${Math.random()}`, function (a) {
      console.log(a)
      // resolve(a)
      // 如果是生产环境，会直接注册到windows下（开发环境不会注册）
      if (window[libName]) {
        resolve(window[libName])
        return
      }

      let vueMap = window.__VUE_HOT_MAP__
      // 开发环境，从 __VUE_HOT_MAP__ 中找到变量

      // 找跟name相符的组件
      let maps = _.keys(vueMap)
      let uid = _.find(maps, key => {
        return vueMap[key].options.name === libName
      })
      if (uid) {
        resolve(vueMap[uid].options)
      } else {
        resolve({
          template: `未找到 ${libName} 组件`,
        })
      }
    })
  })
}
