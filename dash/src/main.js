import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './assets/scss/global.scss';

library.add(faPhone);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
