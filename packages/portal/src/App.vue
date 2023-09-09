<script lang="ts" setup>
import { watch } from 'vue';
import { RouterView } from 'vue-router';
import { useDark, useEventSource } from '@vueuse/core';

useDark();

const { data } = useEventSource('/api/auth');

watch(
  () => data.value,
  (val) => {
    console.log('[portal]', val);

    const parsed = JSON.parse(val || '') as { accessToken: string };

    if (parsed.accessToken) {
      localStorage.setItem('accessToken', parsed.accessToken);
    } else {
      localStorage.removeItem('accessToken');
    }
  },
);
</script>

<template>
  <RouterView />
</template>
