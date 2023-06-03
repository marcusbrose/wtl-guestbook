<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    {{ title }}
  </h2>
  <p v-if="subtitle" class="mt-2 text-lg leading-8 text-gray-600">
    {{ subtitle }}
  </p>
</template>