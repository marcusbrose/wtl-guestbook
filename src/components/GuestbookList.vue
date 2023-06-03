<script setup>
import useGuestbookStore from '@/stores/guestbook'
import GuestbookListItem from './GuestbookListItem.vue'

const guestbook = useGuestbookStore()
</script>

<template>
  <div class="flex flex-col divide-y">
    <GuestbookListItem v-for="entry in guestbook.entriesSorted" :key="entry.id" :entry="entry" />
  </div>
</template>