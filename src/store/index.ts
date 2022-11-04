import useApp from './modules/app'

const useStore = () => ({
  app: useApp()
})

export default useStore
