<script lang="ts" setup>
window.addEventListener('message', (evt) => {
  if ([process.env.PRODUCT_URL, process.env.ORDER_URL].includes(evt.origin)) {
    if (evt.data === 'signOut') {
      // localStorage.removeItem('accessToken');

      // const product = document.querySelector('#product') as HTMLIFrameElement;
      // product.contentWindow?.postMessage('signOut', process.env.PRODUCT_URL);

      // const order = document.querySelector('#order') as HTMLIFrameElement;
      // order.contentWindow?.postMessage('signOut', process.env.ORDER_URL);
    }
  }
});
</script>

<template>
  <div></div>
</template>
