import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import moment from 'moment';
import VueMoment from 'vue-moment';


Vue.use(VueRouter)
Vue.use(VueMoment, { moment });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
