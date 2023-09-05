<script lang="ts" setup>
import { ref } from 'vue';
import { XTextField, XButton, XLink } from '@x/ui';

const PRODUCT_IFRAME = ref<HTMLIFrameElement>();
const PRODUCT_URL = process.env.PRODUCT_URL;
const ORDER_IFRAME = ref<HTMLIFrameElement>();
const ORDER_URL = process.env.ORDER_URL;

const signIn = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoeWFtLmNoZW4iLCJ1dWlkIjoiNTM0YmQzOGQtZmE5Ni00ZGYyLWE5M2YtNjU4YmZjODMzYzJmIiwiaWF0IjoxNjkzOTAwMjk5LCJleHAiOjE2OTM5MDE0OTl9.2_KdihnWJga-3xLaz2NcJGiolKjUtzJDYE3tLVguspw`;

  const data = JSON.stringify({
    accessToken,
  });

  localStorage.setItem('accessToken', accessToken);

  PRODUCT_IFRAME.value?.contentWindow?.postMessage(data, PRODUCT_URL);
  ORDER_IFRAME.value?.contentWindow?.postMessage(data, ORDER_URL);

  location.assign(PRODUCT_URL);
};

window.addEventListener('message', (evt) => {
  if ([PRODUCT_URL, ORDER_URL].includes(evt.origin)) {
    if (evt.data === 'signOut') {
      localStorage.removeItem('accessToken');

      PRODUCT_IFRAME.value?.contentWindow?.postMessage('signOut', PRODUCT_URL);
      ORDER_IFRAME.value?.contentWindow?.postMessage('signOut', ORDER_URL);
    }
  }
});
</script>

<template>
  <iframe ref="PRODUCT_IFRAME" :src="PRODUCT_URL" class="hidden"></iframe>
  <iframe ref="ORDER_IFRAME" :src="ORDER_URL" class="hidden"></iframe>

  <div class="w-full max-w-sm m-6">
    <form class="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8">
      <div class="mb-8">
        <div class="text-slate-900 dark:text-white font-bold text-xl mb-2">
          Sign in to our platform
        </div>

        <div>Login here using your username and password</div>
      </div>

      <div class="mb-4">
        <XTextField label="Username" data-testid="username" />
      </div>

      <div class="mb-8">
        <XTextField label="Password" type="password" data-testid="password" />
      </div>

      <XButton class="w-full mb-4" data-testid="sign-in" @click="signIn">Sign in</XButton>

      <div class="text-center">
        <XLink to="/forgot-password">Forgot Password?</XLink>
      </div>
    </form>
  </div>
</template>
