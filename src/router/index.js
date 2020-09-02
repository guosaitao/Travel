import Vue from 'vue'
import Router from 'vue-router'
import city from '@/pages/city/city.vue'
import Detail from '@/pages/detail/Detail.vue'
import Test from '@/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:() => import('@/pages/home/Home.vue')//异步组件请求数据
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
    },
    {
      path: '/test',
      name:'Test',
      component:Test
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
