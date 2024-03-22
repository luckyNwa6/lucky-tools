import { createApp } from 'vue'

import App from '@/App.vue'
import { isDevMode } from '@/utils/env'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //配置了vue-i18n就不需要这个了
import baiduMap from 'vue3-baidu-map-gl' //百度地图
//样式---------------------------------
import '@/styles/index.scss' //重置样式
import 'uno.css'
import 'element-plus/dist/index.css'

//导入svg插件，去阿里图标库，选择icon，copy它的Svg代码,并放到本项目的icons下，起个名字放入
import 'virtual:svg-icons-register'
//全局注册ep图标
import ElementPlusIconsVue from '@/components'

//引入路由
import router from '@/router/index'
//引入仓库
import pinia from './store'
// 国际化
import i18n from '@/lang/index'

import luckyLogPrint from '@/utils/luckyLogPrint'
// 本地开发模式 全局引入 element-plus 样式，加快第一次进入速度
if (isDevMode()) {
  import('element-plus/dist/index.css')
}
window.lucky = luckyLogPrint
// // 创建实例
// const setupAll = async () => {
//   const app = createApp(App)

//   app.use(ElementPlusIconsVue)
//   //国际化配置
//   app.use(ElementPlus, {
//     locale: zhCn,
//   })
//   app
//     .use(baiduMap, {
//       ak: 'YCdK22Org07KZW3sdYtsCcU3FIPLkHvB',
//       plugins: ['TrackAnimation'],
//     })
//     .use(pinia) //安装仓库

//   app
//     .use(router) //注册模板路由
//     .use(i18n) //中英切换
//     .use(ElementPlus) //安装element-plus插件

//     .use(plugins)
//     .mount('#app')
// }

// setupAll()

// console.log(import.meta.env)

//测试mock  可以
// import axios from 'axios'
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// })
//获取应用实例对象
const app = createApp(App)

app.use(ElementPlusIconsVue)
//国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(baiduMap, {
  ak: 'YCdK22Org07KZW3sdYtsCcU3FIPLkHvB',
  plugins: ['TrackAnimation'],
})

app

  .use(router) //注册模板路由
  .use(i18n) //中英切换
  .use(ElementPlus) //安装element-plus插件
  .use(pinia) //安装仓库

  .mount('#app') //将应用挂载道节点上
lucky.blue(`欢迎使用`, import.meta.env.VITE_APP_TITLE + '后台管理系统')
