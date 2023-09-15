<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { XButton } from '@x/ui';

async function signOut() {}
</script>

<template>
  <RouterView />
  <XButton color="secondary" @click="signOut">Sign out</XButton>
</template>
