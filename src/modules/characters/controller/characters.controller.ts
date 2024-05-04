import { Request, Response } from 'express'
import characterService from '../service/characters.service'
import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

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