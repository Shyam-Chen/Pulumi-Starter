import '@unocss/reset/tailwind.css';
import 'uno.css';
import { createApp } from 'vue';

import router from '~/plugins/router';

import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');

const status = Array(2).fill(false);

const createIframe = (name: string, url: string, uid: number) => {
  const iframe = document.createElement('iframe');
  iframe.id = name;
  iframe.src = `${url}/channel`;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  iframe.onload = () => {
    status[uid] = true;

    if (status.every(Boolean)) {
      app.mount('#root');
    }
  };
};

// createIframe('product', process.env.PRODUCT_URL, 0);
// createIframe('order', process.env.ORDER_URL, 1);
