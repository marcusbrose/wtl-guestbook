<script setup>
import MainNav from '@/components/MainNav.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <MainNav />
  </header>
  <main>
    <slot />
  </main>
</template>