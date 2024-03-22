//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/',
    redirect: '/login',
  },

  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'DataLine',
    },
  },
]

//测试路由    同级index.ts再设置一下
export const testRoute = [
  {
    path: '/i18T',
    component: () => import('@/views/i18T/index.vue'),
    name: 'i18T',
  },
  {
    path: '/chart',
    component: () => import('@/views/chart/index.vue'),
    name: 'chart',
  },
  {
    path: '/unoCssT',
    component: () => import('@/views/unoCssT/index.vue'),
    name: 'unoCssT',
  },

  {
    path: '/tableT',
    component: () => import('@/views/tableT/index.vue'),
    name: 'tableT',
  },
  {
    path: '/iconT',
    component: () => import('@/views/iconT/index.vue'),
    name: 'iconT',
  },
  {
    path: '/conT',
    component: () => import('@/views/conT/index.vue'),
    name: 'conT',
  },
  {
    path: '/mapT',
    component: () => import('@/views/mapT/index.vue'),
    name: 'mapT',
  },
]
