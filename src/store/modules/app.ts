// 定义一个接口，可以让 state 有智能提示功能
interface Istate {
  ElementPlusSize: string
}

export default {
  namespaced: true,
  state() {
    return {
      ElementPlusSize: 'default'
    }
  },
  mutations: {
    setSize(state: Istate, val: string) {
      state.ElementPlusSize = val
    }
  }
}
