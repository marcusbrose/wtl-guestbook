import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { useStorage } from '@vueuse/core'

export default defineStore('guestbook', {
  state: () => ({
    entries: useStorage('entries', []),
  }),
  getters: {
    entriesSorted: (state) => {
      return state.entries
        .sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
    }
  },
  actions: {
    async addEntry(entry) {
      // simulate api request
      return new Promise((resolve) => {
        setTimeout(() => resolve({
          id: uuidv4(),
          ...entry,
          createdAt: new Date(),
        }), 500)
      })
        .then((data) => {
          this.entries.push(data)
        })
    },
  },
})