<script lang="ts" setup>
import { XTextField, XButton, XLink } from '@x/ui';
</script>

<template>
  <div class="w-full max-w-sm m-6">
    <form class="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8">
      <div class="mb-8">
        <div class="text-slate-900 dark:text-white font-bold text-xl mb-2">
          Sign in to our platform
        </div>

        <div>Login here using your username and password</div>
      </div>

      <div class="mb-4">
        <XTextField label="Username" data-testid="username" />
      </div>

      <div class="mb-8">
        <XTextField label="Password" type="password" data-testid="password" />
      </div>

      <XButton class="w-full mb-4" data-testid="sign-in">Sign in</XButton>

      <div class="text-center">
        <XLink to="/forgot-password">Forgot Password?</XLink>
      </div>
    </form>
  </div>
</template>
