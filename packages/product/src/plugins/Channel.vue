<script lang="ts" setup>
window.addEventListener('message', (evt) => {
  if (evt.origin === process.env.PORTAL_URL) {
    if (evt.data === 'signOut') {
      // localStorage.removeItem('accessToken');
    } else {
      const received = JSON.parse(evt.data) as { accessToken: string };
      localStorage.setItem('accessToken', received.accessToken);
    }
  }
});
</script>

<template>
  <div></div>
</template>
