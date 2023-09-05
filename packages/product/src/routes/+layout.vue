<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { XButton } from '@x/ui';

const PORTAL_IFRAME = ref<HTMLIFrameElement>();
const PORTAL_URL = process.env.PORTAL_URL;

function goToOrder() {
  location.assign('http://localhost:8002');
}

function signOut() {
  PORTAL_IFRAME.value?.contentWindow?.postMessage('signOut', PORTAL_URL);
  location.assign(PORTAL_URL);
}
</script>

<template>
  <iframe ref="PORTAL_IFRAME" :src="PORTAL_URL" class="hidden"></iframe>

  <div class="p-4">
    <div class="flex gap-3">
      <XButton @click="goToOrder">Go to Order</XButton>
      <XButton color="secondary" @click="signOut">Sign out</XButton>
    </div>

    <main class="py-4">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.list {
  @apply w-48 text-sm font-medium border rounded-lg;
  @apply text-gray-900 bg-white border-gray-200;
  @apply dark:bg-gray-700 dark:border-gray-600 dark:text-white;
}

.link {
  @apply block w-full px-4 py-2 cursor-pointer;
  @apply hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700;
  @apply dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white;
}
</style>
