import { Request, Response } from 'express'
import creatorService from '../service/creators.service'

class CreatorController {
    async create(req: Request, res: Response) {
        const createdCreator = await creatorService.createCreator(req.body)
        res.status(201)
        return res.json(createdCreator)
    }

    async findAll(req: Request, res: Response) {
        const findedCreators = await creatorService.findAllCreators()
        return res.json(findedCreators)
    }

    async findById(req: Request, res: Response) {
        const findCreator = await creatorService.findCreatorById(req.params.id)
        return res.json(findCreator)
    }

    async update(req: Request, res: Response) {
        const updateCreator = await creatorService.updateCreator(req.params.id, req.body)
        return res.json(updateCreator)
    }

    async delete(req: Request, res: Response) {
        const deletedCreatorMsg = await creatorService.deleteCreator(req.params.id)
        return res.json(deletedCreatorMsg)
    }
}

export default new CreatorController()