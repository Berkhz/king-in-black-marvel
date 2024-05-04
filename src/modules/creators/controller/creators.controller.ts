import { Request, Response } from 'express'
import creatorService from '../service/creators.service'
import axios from 'axios'

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

    async creatorInfo(req: Request, res: Response) {
        try {
            const responseApi = await axios.get(
                "https://gateway.marvel.com/v1/public/comics/85653/creators?ts=1&apikey=fb0ecbf1e8cbb00c85ee9466b918904f&hash=1b76d24fae203827bac77db84ab90835"
            )
            const creators = responseApi.data.data.results.map((creator: { fullName: any; thumbnail: { path: any; extension: any }; comics: { items: any[] } }) => ({
                fullname: creator.fullName,
                thumbnail: creator.thumbnail ? `${creator.thumbnail.path}.${creator.thumbnail.extension}` : null,
                comics: creator.comics.items.map((comic: { name: any }) => comic.name)
            }))
            return res.status(200).json(creators)

        } catch (error) {
            console.error(`Error to search all comics launched: ${error}`)
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