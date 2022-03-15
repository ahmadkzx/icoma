import { Router } from 'express'
import { getConfig, setConfig } from '../controllers/config.controller'

const route = Router()
route.get('/api', getConfig)
route.patch('/api', setConfig)

export default route