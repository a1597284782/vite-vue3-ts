import type { AppRouteRecordRaw } from '../types'
import Layout from '@/layouts/index.vue'

const TestBaseManagement: Array<AppRouteRecordRaw> = [
  {
    name: 'TestBaseManagement',
    meta: {
      title: '题库管理',
      icon: 'HelpFilled'
    },
    path: '/test-base-management',
    component: Layout,
    redirect: '/test-base-management/my-question',
    children: [
      {
        name: 'MyQuestion',
        path: 'my-question',
        component: () =>
          import('@/views/test-base-management/my-question/index.vue'),
        meta: {
          title: '我的题库',
          icon: 'HelpFilled'
        }
      }
    ]
  }
]

export default TestBaseManagement
