<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div
    class="fixed top-0 right-0 left-0 flex justify-between items-center px-4 min-h-16 shadow-lg bg-slate-100"
  >
    <div class="p-3 -ml-3 mr-3 rounded-full hover:bg-slate-300">
      <div class="i-material-symbols-menu w-6 h-6"></div>
    </div>

    <div class="text-xl font-medium">Title Large</div>

    <div class="p-3 -ml-3 ml-3 rounded-full hover:bg-slate-300">
      <div class="i-material-symbols-account-circle w-6 h-6"></div>
    </div>
  </div>

  <div class="p-10"></div>

  <ul class="list">
    <li><RouterLink to="/product" class="link">Product</RouterLink></li>
    <li><RouterLink to="/order" class="link">Order</RouterLink></li>
  </ul>

  <div class="flex justify-center pt-12">
    <div id="subapp-container"></div>
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
