import cors from 'cors'
import express from 'express'
import routes from './routes'

(async function init() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use('/api', routes)
  await app.listen(4000)
})()