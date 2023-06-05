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
  <article class="guestbook-item">
    <time :datetime="entry.createdAt" class="guestbook-item__time">
      {{ datetime }}
    </time>
    <h3 class="guestbook-item__title">
      {{ entry.title }}
    </h3>
    <p v-html="text" class="guestbook-item__text" />
    <p class="guestbook-item__by">
      by {{ entry.email }}
    </p>
  </article>
</template>

<style>
.guestbook-item {
  @apply flex flex-col items-start justify-between space-y-2 py-8;
}
.guestbook-item__time {
  @apply text-gray-500;
}
.guestbook-item__title {
  @apply text-lg font-semibold leading-6 text-gray-900;
}
.guestbook-item__text {
  @apply line-clamp-3 text-base leading-6 text-gray-600;
}
.guestbook-item__by {
  @apply text-sm relative z-10 rounded-full font-medium text-gray-400;
}
</style>