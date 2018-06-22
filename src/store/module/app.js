const app = {
  state: {
    menuTheme: 'dark', // 主题
    currentPath: [
      {
        title: '首页',
        path: '',
        name: 'home_index'
      }
    ] // 面包屑数组
  },
  mutations: {
    setAvator (state, path) {
      localStorage.avatorImgPath = path
    },
    changeMenuTheme (state, theme) {
      state.menuTheme = theme
    },
    setCurrentPath (state, pathArr) {
      state.currentPath = pathArr
    }
  }
}
export default app
