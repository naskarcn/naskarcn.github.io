import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'

import store from './store'

Vue.use(VueHead)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
