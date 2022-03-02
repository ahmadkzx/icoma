import { Router } from 'express'
import { getIcons, addIcon, deleteIcon } from '../controllers/icons.controller'

const route = Router()
route.put('/icons', addIcon)
route.get('/icons', getIcons)
route.delete('/icons', deleteIcon)

export default route