import Vue from 'vue'
import iView from 'iview'
import VueI18n from 'vue-i18n'
import App from './app.vue'
import {router} from './router/index'
import store from '@/store/index.js'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueI18n)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name
  }
})
