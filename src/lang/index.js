import { createI18n } from 'vue-i18n'
// import { useAppStore } from '@/store/modules/app';
import Elp_ZhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Elp_en from 'element-plus/dist/locale/en.mjs'

// const appStore = useAppStore();
// 本地语言包
import enLocale from './package/en.json'
import zhCnLocale from './package/zh-cn.json'

const messages = {
  // 'zh-cn': {
  //   ...zhCnLocale
  // },
  zh: {
    ...zhCnLocale,
    ...Elp_ZhCn,
  },
  en: {
    ...enLocale,
    ...Elp_en,
  },
}

const i18n = createI18n({
  legacy: false,
  locale: window.localStorage.getItem('language') || 'zh',
  messages: messages,
})

export default i18n
