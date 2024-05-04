import { Router } from 'express'
import charactersController from './modules/characters/controller/characters.controller'
import comicsController from './modules/comics/controller/comics.controller'
import creatorsController from './modules/creators/controller/creators.controller'

const routes = Router()

//Characters Routes
routes.post('/character', charactersController.create)
routes.get('/categoria', charactersController.findAll)
routes.get('/categoria/:id', charactersController.findById)
routes.put('/categoria/:id', charactersController.update)
routes.delete('/categoria/:id', charactersController.delete)

// Comics Routes
routes.post('/categoria', comicsController.create)
routes.get('/categoria', comicsController.findAll)
routes.get('/categoria/:id', comicsController.findById)
routes.put('/categoria/:id', comicsController.update)
routes.delete('/categoria/:id', comicsController.delete)

// Creators Routes
routes.post('/categoria', comicsController.create)
routes.get('/categoria', comicsController.findAll)
routes.get('/categoria/:id', comicsController.findById)
routes.put('/categoria/:id', comicsController.update)
routes.delete('/categoria/:id', comicsController.delete)
export { routes }