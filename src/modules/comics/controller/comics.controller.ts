import { Request, Response } from 'express'
import comicService from '../service/comics.service'

class ComicsController {
    async create(req: Request, res: Response) {
        const createdComic = await comicService.createComic(req.body)
        res.status(201)
        return res.json(createdComic)
    }

    async findAll(req: Request, res: Response) {
        const findedComics = await comicService.findAllComics()
        return res.json(findedComics)
    }

    async findById(req: Request, res: Response) {
        const findComic = await comicService.findComicById(req.params.id)
        return res.json(findComic)
    }

    async update(req: Request, res: Response) {
        const updateComic = await comicService.updateComic(req.params.id, req.body)
        return res.json(updateComic)
    }

    async delete(req: Request, res: Response) {
        const deletedComicMsg = await comicService.deleteComic(req.params.id)
        return res.json(deletedComicMsg)
    }
}

export default new ComicsController()