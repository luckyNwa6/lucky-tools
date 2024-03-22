/*
 * @Author: LuckyNwa⭐️
 * @Date: 2024-03-22 10:40:56
 * @FilePath: \luckyTools\src\router\routes.ts
 * @LastEditTime: 2024-03-22 11:02:42
 * @Description:
 */
//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    path: '/',
    redirect: '/home',
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
