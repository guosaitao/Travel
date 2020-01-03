import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import city from '@/pages/city/city.vue'
import Detail from '@/pages/detail/Detail.vue'
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
    },
    {
      path: '/detail/:id',
      name:'detail',
      component:Detail
    }
  ]
})
