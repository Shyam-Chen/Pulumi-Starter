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
    entry: process.env.PRODUCT_URL,
    container: '#subapp-container',
    activeRule: '/product',
  },
  {
    name: 'order',
    entry: process.env.ORDER_URL,
    container: '#subapp-container',
    activeRule: '/order',
  },
]);

start();
