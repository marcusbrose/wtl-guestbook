<script setup>
import { RouterLink } from 'vue-router'
import MainNav from './MainNav.vue'
</script>

<template>
  <header class="flex flex-row items-center space-x-8 p-4">
    <RouterLink to="/">
      <img class="w-12 h-12" src="@/assets/logo.svg" alt="Company Logo" />
    </RouterLink>

    <MainNav />
  </header>
</template>