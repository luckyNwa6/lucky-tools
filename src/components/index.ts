//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
export default {
  install(app: App) {
    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}

//下面是全局注册elementPlus图标和全局注册components下的组件(由于我采用自动导入包就不需要了)
// import SvgIcon from './SvgIcon/index.vue'
// import Pagination from './Pagination/index.vue'
// import Category from './Category/index.vue'
// //引入element-plus提供全部图标组件
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// //全局对象
// const allGloablComponent: any = { SvgIcon, Pagination, Category }
// //对外暴露插件对象
// export default {
//   //务必叫做install方法
//   install(app: any) {
//     //注册项目全部的全局组件
//     Object.keys(allGloablComponent).forEach((key) => {
//       //注册为全局组件
//       app.component(key, allGloablComponent[key])
//     })
//     //将element-plus提供图标注册为全局组件
//     for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//       app.component(key, component)
//     }
//   },
// }
