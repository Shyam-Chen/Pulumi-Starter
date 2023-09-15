<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';
import { XButton } from '@x/ui';

const token = useLocalStorage('token', '');
</script>

<template>
  {{ token }}
  <RouterView />
  <XButton color="secondary">Sign out</XButton>
</template>
