const app = {
  state: {
    menuTheme: 'dark' // 主题
  },
  mutations: {
    setAvator (state, path) {
      localStorage.avatorImgPath = path
    },
    changeMenuTheme (state, theme) {
      state.menuTheme = theme
    }
  }
}
export default app
