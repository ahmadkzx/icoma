import { Router } from 'express'
import { getConfig, addIcon, deleteIcon } from '../controllers/api.controller'

const route = Router()
route.get('/api', getConfig)
route.put('/api/icon', addIcon)
route.delete('/api/icon', deleteIcon)

export default route