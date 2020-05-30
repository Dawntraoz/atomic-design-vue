import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
