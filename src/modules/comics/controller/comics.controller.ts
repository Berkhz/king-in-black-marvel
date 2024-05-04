import { Request, Response } from 'express'
import comicService from '../service/comics.service'
import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

class ComicsController {
    async create(req: Request, res: Response) {
        try {
            const createdComic = await comicService.createComic(req.body)
            res.status(201)
            return res.json(createdComic)
        } catch (error) {
            console.error(`Error to create a new comic: ${error}`)
            return res.status(500)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const findedComics = await comicService.findAllComics()
            return res.json(findedComics)
        } catch (error) {
            console.error(`Error to search all comics: ${error}`)
            return res.status(500)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const findComic = await comicService.findComicById(req.params.id)
            return res.json(findComic)
        } catch (error) {
            console.error(`Error to search a comic: ${error}`)
            return res.status(500)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updateComic = await comicService.updateComic(req.params.id, req.body)
            return res.json(updateComic)
        } catch (error) {
            console.error(`Error to update a comic: ${error}`)
            return res.status(500)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedComicMsg = await comicService.deleteComic(req.params.id)
            return res.json(deletedComicMsg)
        } catch (error) {
            console.error(`Error to delete a comic: ${error}`)
            return res.status(500)
        }
    }
}

export default new ComicsController()