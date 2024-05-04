import comicModel from "../model/comics.model"
import { ComicsType } from "../types/comics.types"

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