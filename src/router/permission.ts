import router from './index'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 进度条配置 -> 隐藏转轮
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.inc()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
