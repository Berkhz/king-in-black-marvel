import { Request, Response } from 'express'
import characterService from '../service/characters.service'

class CharactersController {
    async create(req: Request, res: Response) {
        const createdCharacter = await characterService.createCharacter(req.body)
        res.status(201)
        return res.json(createdCharacter)
    }

    async findAll(req: Request, res: Response) {
        const findedCharacters = await characterService.findAllCharacters()
        return res.json(findedCharacters)
    }

    async findById(req: Request, res: Response) {
        const findCharacter = await characterService.findCharacterById(req.params.id)
        return res.json(findCharacter)
    }

    async update(req: Request, res: Response) {
        const updateCreator = await characterService.updateCharacter(req.params.id, req.body)
        return res.json(updateCreator)
    }

    async delete(req: Request, res: Response) {
        const deletedCreatorMsg = await characterService.deleteCharacter(req.params.id)
        return res.json(deletedCreatorMsg)
    }
}

export default new CharactersController()