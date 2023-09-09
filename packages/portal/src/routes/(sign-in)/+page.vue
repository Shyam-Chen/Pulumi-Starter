<script lang="ts" setup>
import { nextTick } from 'vue';
import { XTextField, XButton, XLink } from '@x/ui';

const signIn = async () => {
  const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoeWFtLmNoZW4iLCJ1dWlkIjoiNTM0YmQzOGQtZmE5Ni00ZGYyLWE5M2YtNjU4YmZjODMzYzJmIiwiaWF0IjoxNjkzOTAwMjk5LCJleHAiOjE2OTM5MDE0OTl9.2_KdihnWJga-3xLaz2NcJGiolKjUtzJDYE3tLVguspw`;
  localStorage.setItem('accessToken', accessToken);

  const data = JSON.stringify({
    accessToken,
  });

  await nextTick();
  await fetch('/api/auth/sign-in');
  // const product = document.querySelector('#product') as HTMLIFrameElement;
  // product.contentWindow?.postMessage(data, process.env.PRODUCT_URL);

  // const order = document.querySelector('#order') as HTMLIFrameElement;
  // order.contentWindow?.postMessage(data, process.env.ORDER_URL);

  location.assign(process.env.PRODUCT_URL);
};
</script>

<template>
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
