import '@unocss/reset/tailwind.css';
import 'uno.css';
import type { App as Root } from 'vue';
import type { QiankunProps } from 'vite-plugin-qiankun/es/helper';
import { createApp } from 'vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';

import router from '~/plugins/router';

import App from './App.vue';

let root: Root;

function render(props: QiankunProps) {
  const { container } = props;
  root = createApp(App);
  root.use(router);
  const _container = container ? container.querySelector('#root') : '#root';
  root.mount(_container);
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount() {
    root.unmount();
  },
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
