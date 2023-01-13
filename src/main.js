import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import router from './router/routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(Router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
