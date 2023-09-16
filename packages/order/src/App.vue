<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { useDark } from '@vueuse/core';

useDark();
</script>

<template>
  <RouterView />
</template>

<style lang="postcss">
@unocss;
</style>
