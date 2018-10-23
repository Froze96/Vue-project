import Vue from 'vue'
import App from './App.vue'

//plugins
import './plugins/axios'

new Vue({
  el: '#app',
  render: h => h(App)
})
