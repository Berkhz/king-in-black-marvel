import comicModel from "../model/comics.model"
import { ComicsType } from "../types/comics.types"

import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

class ComicService {
    async createComic(comic: ComicsType) {
        const createdComic = await comicModel.create(comic)
        return createdComic
    }

    async findAllComics() {
        const findedComics = await comicModel.find()
        return findedComics
    }

    async findComicById(id: String) {
        const findedComic = await comicModel.findById(id) 
        return findedComic
    }

    async updateComic(id: String, comic: ComicsType) {
        const updateComic = await comicModel.findByIdAndUpdate(id, {
            title: comic.comicTitle,
            description: comic.comicDescription,
            datePublished: comic.comicDatePublished,
            picture: comic.comicPicture
        }, {new: true})
        return updateComic
    }

    async deleteComic(id: String) {
        try {
            await comicModel.findByIdAndDelete(id)
            return "Comic removed successfully"
        } catch (error) {
            throw new Error(`Error to remove comic: ${error}`)
        }
    }
}

export default new ComicService()