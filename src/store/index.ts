import { createStore } from 'vuex'

const modulesFiles = import.meta.glob('./modules/**/*.ts', {
  eager: true,
  import: 'default'
})

interface Imodules {
  [key: string]: any
}
const modules: Imodules = {}

Object.keys(modulesFiles).forEach((item) => {
  const moduleName = item.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[item]
  modules[moduleName] = value
})

export default createStore({
  modules
})
