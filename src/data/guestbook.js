import { faker } from '@faker-js/faker'

const entries = [...Array(10)].map(() => ({
  id: faker.string.uuid(),
  email: faker.internet.email(),
  title: faker.word.words({ count: { min: 3, max: 8 } }),
  text: faker.lorem.text(),
  createdAt: faker.date.recent({ days: 10 }),
}))

export default entries