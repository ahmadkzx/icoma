import { Router } from 'express'
import { getConfig, setConfig } from '../controllers/config.controller'

const route = Router()
route.get('/', getConfig)
route.patch('/', setConfig)

export default route
