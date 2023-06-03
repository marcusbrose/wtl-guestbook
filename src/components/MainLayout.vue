<script setup>
import MainHeader from './MainHeader.vue'
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <MainHeader />
    <main>
      <slot />
    </main>
  </div>
</template>