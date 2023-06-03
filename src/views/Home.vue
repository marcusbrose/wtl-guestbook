<script setup>
import MainLayout from '@/components/MainLayout.vue'
import CoreTitle from '../components/CoreTitle.vue'
import CoreButton from '../components/CoreButton.vue'
</script>

<template>
  <MainLayout>
    <div class="p-4 pt-12">
      <CoreTitle title="Welcome to the guestbook app" />
      
      <div class="mt-10 flex items-center gap-x-6">
        <RouterLink to="/guestbook">
          <CoreButton>
            Try now
          </CoreButton>
        </RouterLink>
      </div>
    </div>
  </MainLayout>
</template>
