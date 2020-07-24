import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

import store from './store'
import Axios from 'axios'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// set auth header
Axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
