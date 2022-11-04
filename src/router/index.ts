import { createRouter, createWebHashHistory } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

const modules = import.meta.glob('./modules/**/*.ts', {
  eager: true,
  import: 'default'
})

const routeModuleList: AppRouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key] || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

// 公共路由
const publicRoutes = [
  {
    name: 'default',
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    name: 'RegisterLoginsPages',
    path: '/login',
    redirect: '/login/pwd',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    },
    hidden: true,
    children: [
      {
        name: 'LoginPages',
        path: 'pwd',
        component: () => import('@/views/login/pwd.vue'),
        meta: {
          title: '密码登录'
        }
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  }
]

const asyncRoutes = [...publicRoutes, ...routeModuleList]

export default createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
