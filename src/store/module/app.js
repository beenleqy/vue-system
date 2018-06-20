const app = {
  state: {},
  mutations: {
    setAvator (state, path) {
      localStorage.avatorImgPath = path
    }
  }
}
export default app
