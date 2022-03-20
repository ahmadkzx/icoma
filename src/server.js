import cors from 'cors'
import express from 'express'
import routes from './api/routes'
;(async function startIcom() {
  try {
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/api', routes)
    if (process.env.NODE_ENV == 'production') app.use('/app', express.static(__dirname))
    await app.listen(5000)

    console.log('Icom started...')
  } catch (err) {
    console.error(err)
  }
})()
