<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { useDark } from '@vueuse/core';

useDark();
</script>

<template>
  <RouterView />
  <div id="subapp-container"></div>
</template>

<style lang="postcss">
@unocss;
</style>
