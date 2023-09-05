<script lang="ts" setup>
import { RouterView } from 'vue-router';

window.addEventListener('message', (evt) => {
  if (evt.origin === 'http://localhost:8000') {
    if (evt.data === 'signOut') {
      localStorage.removeItem('accessToken');
    } else {
      const received = JSON.parse(evt.data) as { accessToken: string };
      localStorage.setItem('accessToken', received.accessToken);
    }
  }
});
</script>

<template>
  <RouterView />
</template>
