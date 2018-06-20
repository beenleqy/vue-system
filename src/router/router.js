import Main from '@/views/main.vue'
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登陆'
  },
  component: resolve => { require(['@/views/login.vue'], resolve) }
}
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: Main,
  children: [
    { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve) } }
    // { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
    // { path: 'order/:order_id', title: '订单详情', name: 'order_info', component: resolve => { require(['@/views/advanced-router/component/order-info.vue'], resolve); } },  // 用于展示动态路由
    // { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['@/views/advanced-router/component/shopping-info.vue'], resolve); } },  // 用于展示带参路由
    // { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } }
  ]
}
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter
]
