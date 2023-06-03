<script setup>
import { ref } from 'vue'
import z from 'zod'
import CoreInput from './CoreInput.vue'
import CoreInputEmail from './CoreInputEmail.vue'
import CoreFormElement from './CoreFormElement.vue'
import CoreInputTexarea from './CoreInputTexarea.vue'
import CoreButton from './CoreButton.vue'
import CoreSpinner from './CoreSpinner.vue'
import useGuestbookStore from '@/stores/guestbook'

const entrySchema = z.object({
  email: z.string()
    .email({ message: 'Invalid email' }),
  title: z.string()
    .min(1, { message: 'Please enter a title' })
    .max(15, { message: 'Your title must be 15 or fewer characters long' }),
  text: z.string()
    .min(10, { message: 'Please write at least a few words' })
    .max(500, { message: 'Your message must be 15 or fewer characters long' }),
})

const initialEntry = {
  email: '',
  title: '',
  text: '',
}

const entry = ref({ ...initialEntry })
const fieldErrors = ref(null)
const loading = ref(false)

const guestbook = useGuestbookStore()

const onSubmit = () => {
  // prevent double sent form
  if (loading.value) {
    return
  }
  fieldErrors.value = null
  try {
    entrySchema.parse(entry.value)

    loading.value = true
    guestbook.addEntry(entry.value)
      .then(() => {
        entry.value = { ...initialEntry }
      })
      .finally(() => {
        loading.value = false
      })

  } catch (err) {
    if (err instanceof z.ZodError) {
      fieldErrors.value = err.flatten().fieldErrors
    }
  }
}

</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col space-y-4 py-8 w-2/3">
    <CoreFormElement id="email" label="Email" :error="fieldErrors?.email?.at(0)">
      <CoreInputEmail id="email" v-model="entry.email" placeholder="Your email address" />
    </CoreFormElement>
    <CoreFormElement id="title" label="Title" :error="fieldErrors?.title?.at(0)">
      <CoreInput id="title" v-model="entry.title" placeholder="Enter a topic" />
    </CoreFormElement>
    <CoreFormElement id="text" label="Message" :error="fieldErrors?.text?.at(0)">
      <CoreInputTexarea id="text" v-model="entry.text" placeholder="Please write some words." />
    </CoreFormElement>

    <CoreButton :disabled="loading">
      <CoreSpinner v-if="loading" />
      <span v-if="loading">
        Sending...
      </span>
      <span v-else>
        Send message
      </span>
    </CoreButton>
  </form>
</template>