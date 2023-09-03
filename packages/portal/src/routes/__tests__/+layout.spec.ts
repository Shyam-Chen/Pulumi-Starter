import type { VueWrapper } from '@vue/test-utils';
import { beforeEach, afterEach, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import router from '~/plugins/router';

import Layout from '../+layout.vue';

let wrapper: VueWrapper;

beforeEach(() => {
  wrapper = mount(Layout, { global: { plugins: [router] } });
});

afterEach(() => {
  wrapper.unmount();
});

test('+layout.vue', async () => {
  const push = vi.spyOn(router, 'push');
  await router.isReady();

  await wrapper.get('[data-testid="about"]').trigger('click');
  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith('/about');

  await wrapper.get('[data-testid="contact"]').trigger('click');
  expect(push).toHaveBeenCalledTimes(2);
  expect(push).toHaveBeenCalledWith('/contact');

  await wrapper.get('[data-testid="home"]').trigger('click');
  expect(push).toHaveBeenCalledTimes(3);
  expect(push).toHaveBeenCalledWith('/');
});
