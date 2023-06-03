<script setup>
import MainLayout from '@/components/MainLayout.vue'
import CoreTitle from '../components/CoreTitle.vue'
</script>

<template>
  <MainLayout>
    <div class="flex pt-12">
      <div class="flex-1 p-4">
        <CoreTitle title="Guestbook" subtitle="Read what our customers think." />
      </div>
      <div class="flex-1 p-4">
        <CoreTitle title="Write a few words for us" />
      </div>
    </div>
  </MainLayout>
</template>
