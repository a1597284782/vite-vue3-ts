import { defineStore } from 'pinia'

const useApp = defineStore({
  id: 'app',
  state: () => ({
    ElementPlusSize: 'default'
  }),
  actions: {
    setSize(val: string) {
      this.ElementPlusSize = val
    }
  }
})

export default useApp
