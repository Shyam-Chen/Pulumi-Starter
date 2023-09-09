import '@unocss/reset/tailwind.css';
import 'uno.css';
import { createApp } from 'vue';

import router from '~/plugins/router';

import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');

const createIframe = (name: string, url: string) => {
  const iframe = document.createElement('iframe');
  iframe.id = name;
  iframe.src = `${url}/channel`;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  iframe.onload = () => {
    app.mount('#root');
  };
};

// createIframe('portal', process.env.PORTAL_URL);
