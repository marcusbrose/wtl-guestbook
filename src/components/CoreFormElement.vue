<script setup>
defineProps({
  id: {
    type: String
  },
  label: {
    type: String
  },
  error: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-semibold leading-6 text-gray-900">
      {{ label }}
    </label>
    <div class="mt-2.5">
      <slot />
    </div>
    <div v-if="error" class="text-red-500 py-1">
      {{ error }}
    </div>
  </div>
</template>