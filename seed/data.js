import db from '../db/connection.js'
import Post from '../models/post.js'
import faker from 'faker'

const insertData = async () => {
  await db.dropDatabase()

  const posts = [...Array(100)].map(item => {
    return {
      title: faker.lorem.sentence(),
      imgURL: faker.internet.url(),
      content: faker.lorem.paragraph(),
      author: faker.name.findName()
    }

  })
  await Post.insertMany(posts)
  console.log(`Created posts!`)

  db.close()
}

insertData()