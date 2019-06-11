import Vue from "vue";
import App from "./App.vue";

// Import Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

// Import Bootstrap-vue css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
