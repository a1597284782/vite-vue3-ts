import type { RouteRecordRaw } from 'vue-router'
// import type { RouteMeta } from 'types/vue-router'
import { defineComponent } from 'vue'

export type Component<T> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

interface Mete {
  // 设置该路由在侧边栏和面包屑中展示的名字
  title?: string
  // 设置该路由的图标
  icon?: string
  // 如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
  breadcrumb?: boolean
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: Mete
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
  hidden?: boolean
  // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如首页
  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  alwaysShow?: boolean
}
