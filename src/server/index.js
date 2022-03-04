import cors from 'cors'
import express from 'express'
import apiRoutes from './routes/api.router'

(async function init() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(apiRoutes)
  await app.listen(4000)
})()