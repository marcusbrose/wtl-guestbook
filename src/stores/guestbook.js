import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export default defineStore('guestbook', {
  state: () => ({
    entries: [],
  }),
  getters: {
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