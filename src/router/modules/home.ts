import type { AppRouteRecordRaw } from '../types'
import Layout from '@/layouts/index.vue'

const homeRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Home',
    meta: {
      icon: 'HomeFilled'
    },
    path: '/home',
    component: Layout,
    redirect: '/home/dashboard',
    children: [
      {
        name: 'DashBoard',
        path: 'dashboard',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        }
      }
    ]
  }
]

export default homeRoutes
