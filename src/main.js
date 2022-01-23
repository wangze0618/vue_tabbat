import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
axios.defaults.baseURL = "https://www.escook.cn"

Vue.config.productionTip = false;
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
