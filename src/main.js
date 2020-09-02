// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import vueAwesome from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { 
  Field  
} from 'vant';

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(
  vueAwesome,
  Field
  )
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
