import { Router } from 'express'
import { addIcon, deleteIcon, updateIcon } from '../controllers/icon.controller'

const route = Router()
route.put('/icon', addIcon)
route.patch('/icon', updateIcon)
route.delete('/icon', deleteIcon)

export default route