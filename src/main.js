import Vue from 'vue'
import VueBus from 'vue-bus'
import './AntDesign'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueBus)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
