import { Router } from 'express'
import { addIcon, deleteIcon, updateIcon } from '../controllers/icon.controller'

const route = Router()
route.put('/api/icon', addIcon)
route.patch('/api/icon', updateIcon)
route.delete('/api/icon', deleteIcon)

export default route