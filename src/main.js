import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//  Bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'

import App from './App.vue'
import router from './router'
import store from './store'

//  Install BootstrapVue
Vue.use(BootstrapVue)
//  Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
