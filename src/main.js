// main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import "vuetify/dist/vuetify.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Import the router
import router from './plugins/router';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app');
