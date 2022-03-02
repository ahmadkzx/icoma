import express from 'express'
import IconsRoutes from './routes/icons.router'

(async function init() {
  const app = express()
  app.use(IconsRoutes)
  await app.listen(4000)
})()