<script setup>
import MainLayout from '@/components/MainLayout.vue'
import CoreTitle from '../components/CoreTitle.vue'
import GuestbookForm from '../components/GuestbookForm.vue'
import GuestbookList from '../components/GuestbookList.vue';
</script>

<template>
  <MainLayout>
    <div class="flex flex-col md:flex-row pt-12 divide-x">
      <div class="flex-1 p-4">
        <CoreTitle title="Guestbook" subtitle="Read what our customers think." />
        <GuestbookList />
      </div>
      <div class="flex-1 p-4">
        <CoreTitle title="What would you like to tell us?" />
        <GuestbookForm />
      </div>
    </div>
  </MainLayout>
</template>
