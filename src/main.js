import Vue from 'vue'
import App from './App.vue'
import api from './mock/api'

Vue.config.productionTip = false
process.env.NODE_ENV === "development" ? api() : ""

new Vue({
  render: h => h(App)
}).$mount('#app')
