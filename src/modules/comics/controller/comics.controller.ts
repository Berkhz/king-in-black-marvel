import { Request, Response } from 'express'
import comicService from '../service/comics.service'
import axios from 'axios'

class ComicsController {
    async create(req: Request, res: Response) {
        try {
            const createdComic = await comicService.createComic(req.body)
            res.status(201)
            return res.json(createdComic)
        } catch (error) {
            console.error(`Error to create a new comic: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async comicFeature(req: Request, res: Response) {
        try {
            const responseApi = await axios.get(
                "https://gateway.marvel.com/v1/public/comics/85653?ts=1&apikey=fb0ecbf1e8cbb00c85ee9466b918904f&hash=1b76d24fae203827bac77db84ab90835"
            )
            const comic = responseApi.data.data.results[0]
            const comicData = {
            title: comic.title,
            description: comic.description,
            thumbnail: comic.thumbnail ? `${comic.thumbnail.path}.${comic.thumbnail.extension}` : null
        };
            return res.status(200).json(comicData)

        } catch (error) {
            console.error(`Error to search all comics launched: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async comicStories(req: Request, res: Response) {
        try {
            const responseApi = await axios.get(
                "https://gateway.marvel.com/v1/public/comics/85653/stories?ts=1&apikey=fb0ecbf1e8cbb00c85ee9466b918904f&hash=1b76d24fae203827bac77db84ab90835"
            );
            const stories = responseApi.data.data.results
            
            const comicData = stories.map((story: { title: any; characters: { items: any[] }; modified: any }) => ({
                title: story.title,
                characters: story.characters.items.map((character: { name: any }) => character.name),
                modified: story.modified
            }))
            
            return res.status(200).json(comicData)
        } catch (error) {
            console.error(`Error fetching comic stories: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const findedComics = await comicService.findAllComics()
            return res.json(findedComics)
        } catch (error) {
            console.error(`Error to search all comics: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const findComic = await comicService.findComicById(req.params.id)
            return res.json(findComic)
        } catch (error) {
            console.error(`Error to search a comic: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updateComic = await comicService.updateComic(req.params.id, req.body)
            return res.json(updateComic)
        } catch (error) {
            console.error(`Error to update a comic: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedComicMsg = await comicService.deleteComic(req.params.id)
            return res.json(deletedComicMsg)
        } catch (error) {
            console.error(`Error to delete a comic: ${error}`)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }
}

export default new ComicsController()