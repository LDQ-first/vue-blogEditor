import Vue from 'vue'
import App from './App.vue'
import vueBlogEditor from './lib/index.js'
Vue.use(vueBlogEditor)
new Vue({
  el: '#app',
  render: h => h(App)
})
