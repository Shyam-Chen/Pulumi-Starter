import '@unocss/reset/tailwind.css';
import 'uno.css';
import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';

import router from '~/plugins/router';

import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');

registerMicroApps([
  {
    name: 'product',
    entry: 'http://localhost:8001',
    container: '#subapp-viewport',
    activeRule: '/product',
  },
  {
    name: 'order',
    entry: 'http://localhost:8002',
    container: '#subapp-viewport',
    activeRule: '/order',
  },
]);

start();
