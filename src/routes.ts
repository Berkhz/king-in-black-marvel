import { Router } from 'express'
import charactersController from './modules/characters/controller/characters.controller'
import comicsController from './modules/comics/controller/comics.controller'
import creatorsController from './modules/creators/controller/creators.controller'

const routes = Router()

// Characters Routes
routes.post('/character', charactersController.create)
routes.get('/character', charactersController.findAll)
routes.get('/character/:id', charactersController.findById)
routes.put('/character/:id', charactersController.update)
routes.delete('/character/:id', charactersController.delete)
// Characters Routes (API)
routes.get('/characters/api', charactersController.findAllCharactersAPI)

// Comics Routes
routes.post('/comics', comicsController.create)
routes.get('/comics', comicsController.findAll)
routes.get('/comics/:id', comicsController.findById)
routes.put('/comics/:id', comicsController.update)
routes.delete('/comics/:id', comicsController.delete)
// Comics Routes (API)
routes.get('/comics/api', comicsController.comicFeature)

// Creators Routes
routes.post('/creators', creatorsController.create)
routes.get('/creators', creatorsController.findAll)
routes.get('/creators/:id', creatorsController.findById)
routes.put('/creators/:id', creatorsController.update)
routes.delete('/creators/:id', creatorsController.delete)
// Creators Routes (API)
routes.get('/creators/api', creatorsController.creatorInfo)

export { routes }