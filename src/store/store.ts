import { createStore } from "vuex";

// 定义一个接口，可以让 state 有智能提示功能
interface IStore {
  count: number,
  num: string
}

export default createStore<IStore>({
  state() {
    return {
      count: 0,
      num: ''
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  
})