import db from '../db/connection.js'
import Project from '../models/project.js'
import faker from 'faker'

const insertData = async () => {
  await db.dropDatabase()

  const posts = [...Array(100)].map(item => {
    return {
      title: faker.lorem.sentence(),
      image_url: faker.internet.url(),
      content: faker.lorem.paragraph(),
      author: faker.name()
    }

  })
  await Project.insertMany(projects)
  console.log(`Created projects!`)

  db.close()
}

insertData()