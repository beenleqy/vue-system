import Vue from 'vue'
import Vuex from 'vuex'
import App from './module/app'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    App
  }
})
export default store
