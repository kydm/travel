// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms点击延迟问题
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'styles/reset.css'
// 解决移动端1像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
