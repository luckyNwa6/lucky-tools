/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */

import WebStorageCache from 'web-storage-cache'

export const CACHE_KEY = {
  IS_DARK: 'isDark',
  USER: 'user',
  LANG: 'lang',
  THEME: 'theme',
  LAYOUT: 'layout',
  ROLE_ROUTERS: 'roleRouters',
  DICT_CACHE: 'dictCache'
}

export const useCache = (type = 'localStorage') => {
  const wsCache = new WebStorageCache({
    storage: type
  })

  return {
    wsCache
  }
}
