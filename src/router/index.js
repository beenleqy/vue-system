import Vue from 'vue'
import Router from 'vue-router'
import Util from '@/libs/util'
import Cookies from 'js-cookie'
// import iView from 'iview'
import {routers, otherRouter} from './router'
Vue.use(Router)
const RouterConfig = {
  routes: routers
}
export const router = new Router(RouterConfig)
router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)
  if (!Cookies.get('user') && to.name !== 'login') {
    next({
      name: 'login'
    })
  } else if (Cookies.get('user') && to.name === 'login') {
    next({
      name: 'home_index'
    })
  } else {
    Util.toDefultPage([otherRouter], to.name, router, next)
  }
})
