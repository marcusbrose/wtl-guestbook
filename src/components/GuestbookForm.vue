<script setup>
import { ref } from 'vue'
import CoreInput from './CoreInput.vue'
import CoreInputEmail from './CoreInputEmail.vue'
import CoreFormElement from './CoreFormElement.vue';
import CoreInputTexarea from './CoreInputTexarea.vue';
import CoreButton from './CoreButton.vue';

const entry = ref({
  email: '',
  title: '',
  text: '',
})

const onSubmit = () => {
  console.log(entry.value)
}

</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col space-y-4 py-8 w-2/3">
    <CoreFormElement id="email" label="Email">
      <CoreInputEmail id="email" v-model="entry.email" placeholder="Your email address" />
    </CoreFormElement>
    <CoreFormElement id="title" label="Title">
      <CoreInput id="title" v-model="entry.title" placeholder="Enter a topic" />
    </CoreFormElement>
    <CoreFormElement id="text" label="Message">
      <CoreInputTexarea id="text" v-model="entry.text" placeholder="Please write some words." />
    </CoreFormElement>

    <CoreButton>
      Send message
    </CoreButton>

    <pre>{{ entry }}</pre>
  </form>
</template>