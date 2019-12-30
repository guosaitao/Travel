import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import city from '@/pages/city/city.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path: '/city',
      name:'city',
      component:city
    }
  ]
})
