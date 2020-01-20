import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import temperatureFilter from './filters/temperature.filter.js'
import 'materialize-css/dist/js/materialize.min'

Vue.use(VueAxios, axios)
Vue.filter('termo', temperatureFilter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
