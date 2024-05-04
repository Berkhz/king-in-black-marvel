import { Request, Response } from 'express'
import characterService from '../service/characters.service'
import axios from 'axios'

class CharactersController {
    async create(req: Request, res: Response) {
        try {
            const createdCharacter = await characterService.createCharacter(req.body)
            res.status(200)
            return res.json(createdCharacter)
        } catch (error) {
            console.error(`Error to create a new character: ${error}`)
            return res.status(500)
        }
    }

    async findAllCharactersAPI(req: Request, res: Response) {
        try {
            const responseApi = await axios.get(
                "https://gateway.marvel.com/v1/public/comics/85653/characters?ts=1&apikey=fb0ecbf1e8cbb00c85ee9466b918904f&hash=1b76d24fae203827bac77db84ab90835"
            )
            const characters = responseApi.data.data.results.map((character: { name: any; description: any; thumbnail: { path: any; extension: any } }) => ({
                name: character.name,
                description: character.description,
                thumbnail: character.thumbnail ? `${character.thumbnail.path}.${character.thumbnail.extension}` : null
            }))
            return res.status(200).json(characters);

        } catch (error) {
            console.error(`Error to search all characters: ${error}`)
            return res.status(500)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const findedCharacters = await characterService.findAllCharacters()
            return res.json(findedCharacters)
        } catch (error) {
            console.error(`Error to search all characters: ${error}`)
            return res.status(500)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const findCharacter = await characterService.findCharacterById(req.params.id)
            return res.json(findCharacter)
        } catch (error) {
            console.error(`Error to search a character: ${error}`)
            return res.status(500)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updateCreator = await characterService.updateCharacter(req.params.id, req.body)
            return res.json(updateCreator)
        } catch (error) {
            console.error(`Error to update a character: ${error}`)
            return res.status(500)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedCreatorMsg = await characterService.deleteCharacter(req.params.id)
            return res.json(deletedCreatorMsg)
        } catch (error) {
            console.error(`Error to delete a character: ${error}`)
            return res.status(500)
        }
    }
}

export default new CharactersController()