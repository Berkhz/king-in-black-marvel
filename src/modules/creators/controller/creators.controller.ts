import { Request, Response } from 'express'
import creatorService from '../service/creators.service'
import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

class CreatorController {
    async create(req: Request, res: Response) {
        try {
            const createdCreator = await creatorService.createCreator(req.body)
            res.status(200)
            return res.json(createdCreator)
        } catch (error) {
            console.error(`Error to create a new creator: ${error}`)
            return res.status(500)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const findedCreators = await creatorService.findAllCreators()
            res.status(200)
            return res.json(findedCreators)
        } catch (error) {
            console.error(`Error to search all creators: ${error}`)
            return res.status(500)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const findCreator = await creatorService.findCreatorById(req.params.id)
            res.status(200)
            return res.json(findCreator)
        } catch (error) {
            console.error(`Error to search a creator: ${error}`)
            return res.status(500)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updateCreator = await creatorService.updateCreator(req.params.id, req.body)
            res.status(200)
            return res.json(updateCreator)
        } catch (error) {
            console.error(`Error to update a creator: ${error}`)
            return res.status(500)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedCreatorMsg = await creatorService.deleteCreator(req.params.id)
            res.status(200)
            return res.json(deletedCreatorMsg)
        } catch (error) {
            console.error(`Error to delete a creator: ${error}`)
            return res.status(500)
        }
    }
}

export default new CreatorController()