<script setup>
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Guestbook', path: '/guestbook' },
]
</script>

<template>
  <nav class="flex space-x-4">
    <RouterLink v-for="item in navigation" :key="item.name" :to="item.path"
      class="text-sm font-semibold leading-6 text-gray-900">
      {{ item.name }}
    </RouterLink>
  </nav>
</template>