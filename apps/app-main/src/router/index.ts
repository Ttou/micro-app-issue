import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
    },
    {
      path: '/vue2',
      name: 'vue2',
      component: () =>
        import(/* webpackChunkName: "Vue2" */ '@/views/vue2/index.vue')
    },
    {
      path: '/vue3',
      name: 'vue3',
      component: () =>
        import(/* webpackChunkName: "Vue3" */ '@/views/vue3/index.vue')
    }
  ]
})
