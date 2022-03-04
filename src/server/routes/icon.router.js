import { Router } from 'express'
import { addIcon, deleteIcon } from '../controllers/icon.controller'

const route = Router()
route.put('/api/icon', addIcon)
route.delete('/api/icon', deleteIcon)

export default route