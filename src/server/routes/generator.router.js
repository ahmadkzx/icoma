import { Router } from 'express'
import { generate } from '../controllers/generator.controller'

const route = Router()
route.post('/api/generator', generate)