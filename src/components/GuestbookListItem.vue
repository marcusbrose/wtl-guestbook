<script setup>
import { computed } from 'vue'
import sanitizeHtml from 'sanitize-html'
import nl2br from 'nl2br'

const props = defineProps({
  entry: {
    type: Object
  }
})

const datetime = computed(() => {
  return new Date(props.entry.createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: "2-digit",
    minute: "2-digit"
  })
})

const text = computed(() => {
  return sanitizeHtml(nl2br(props.entry.text))
})
</script>

<template>
  <article class="flex flex-col items-start justify-between space-y-2 py-8">
    <time :datetime="entry.createdAt" class="text-gray-500">
      {{ datetime }}
    </time>
    <h3 class="text-lg font-semibold leading-6 text-gray-900">
      {{ entry.title }}
    </h3>
    <p v-html="text" class="line-clamp-3 text-base leading-6 text-gray-600" />
    <p class="text-sm relative z-10 rounded-full font-medium text-gray-400">
      by {{ entry.email }}
    </p>
  </article>
</template>