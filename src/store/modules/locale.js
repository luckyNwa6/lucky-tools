import { defineStore } from 'pinia'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'

const { wsCache } = useCache()

const elLocaleMap = {
  'zh-CN': zhCn,
  en: en,
}

const useLocaleStore = defineStore('locales', {
  state: () => {
    return {
      currentLocale: {
        lang: wsCache.get(CACHE_KEY.LANG) || 'zh-CN',
        elLocale: elLocaleMap[wsCache.get(CACHE_KEY.LANG) || 'zh-CN'],
      },
      // 多语言
      localeMap: [
        {
          lang: 'zh-CN',
          name: '简体中文',
        },
        {
          lang: 'en',
          name: 'English',
        },
      ],
    }
  },
  getters: {
    getCurrentLocale() {
      return this.currentLocale
    },
    getLocaleMap() {
      return this.localeMap
    },
  },
  actions: {
    setCurrentLocale(localeMap) {
      // this.locale = Object.assign(this.locale, localeMap)
      this.currentLocale.lang = localeMap?.lang
      this.currentLocale.elLocale = elLocaleMap[localeMap?.lang]
      wsCache.set(CACHE_KEY.LANG, localeMap?.lang)
    },
  },
})

export default useLocaleStore
