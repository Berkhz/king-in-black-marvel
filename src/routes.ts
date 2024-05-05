import { Router } from 'express'
import charactersController from './modules/characters/controller/characters.controller'
import comicsController from './modules/comics/controller/comics.controller'
import creatorsController from './modules/creators/controller/creators.controller'

const routes = Router()

// Characters Routes
routes.post('/character', charactersController.create)
routes.get('/characters', charactersController.findAll)
routes.get('/character/:id', charactersController.findById)
routes.put('/character/:id', charactersController.update)
routes.delete('/character/:id', charactersController.delete)
// Characters Routes (API)
routes.get('/allCharacters', charactersController.findAllCharactersAPI)
routes.get('/characterByName/:name', charactersController.characterByName)

// Comics Routes
routes.post('/comic', comicsController.create)
routes.get('/comics', comicsController.findAll)
routes.get('/comic/:id', comicsController.findById)
routes.put('/comic/:id', comicsController.update)
routes.delete('/comic/:id', comicsController.delete)
// Comics Routes (API)
routes.get('/comicFeatures', comicsController.comicFeature)
routes.get('/comicStories', comicsController.comicStories)

// Creators Routes
routes.post('/creator', creatorsController.create)
routes.get('/creators', creatorsController.findAll)
routes.get('/creators/:id', creatorsController.findById)
routes.put('/creators/:id', creatorsController.update)
routes.delete('/creators/:id', creatorsController.delete)
// Creators Routes (API)
routes.get('/creatorsComic', creatorsController.creatorInfo)

export { routes }