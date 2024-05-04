import { Router } from 'express'
import charactersController from './modules/characters/controller/characters.controller'
import comicsController from './modules/comics/controller/comics.controller'
import creatorsController from './modules/creators/controller/creators.controller'

const routes = Router()

// Characters Routes
routes.post('/character', charactersController.create)
routes.get('/categoria', charactersController.findAll)
routes.get('/categoria/:id', charactersController.findById)
routes.put('/categoria/:id', charactersController.update)
routes.delete('/categoria/:id', charactersController.delete)
// Characters Routes (API)
routes.get('/character/api', charactersController.findAllCharactersAPI)

// Comics Routes
routes.post('/categoria', comicsController.create)
routes.get('/categoria', comicsController.findAll)
routes.get('/categoria/:id', comicsController.findById)
routes.put('/categoria/:id', comicsController.update)
routes.delete('/categoria/:id', comicsController.delete)
// Comics Routes (API)
routes.get('/comics/api', comicsController.comicFeature)

// Creators Routes
routes.post('/categoria', creatorsController.create)
routes.get('/categoria', creatorsController.findAll)
routes.get('/categoria/:id', creatorsController.findById)
routes.put('/categoria/:id', creatorsController.update)
routes.delete('/categoria/:id', creatorsController.delete)
// Creators Routes (API)
routes.get('/creators/api', creatorsController.)

export { routes }