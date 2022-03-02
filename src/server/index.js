import cors from 'cors'
import express from 'express'
import IconsRoutes from './routes/icons.router'

(async function init() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(IconsRoutes)
  await app.listen(4000)
})()