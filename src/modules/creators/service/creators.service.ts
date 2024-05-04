import creatorModel from "../model/creators.model"
import { CreatorsType } from "../types/creators.types"

import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

class CreatorService {
    async createCreator(creator: CreatorsType) {
        const createdCreator = await creatorModel.create(creator)
        return createdCreator
    }

    async findAllCreators() {
        const findedCreators = await creatorModel.find()
        return findedCreators
    }

    async findCreatorById(id: String) {
        const findedCreator = await creatorModel.findById(id) 
        return findedCreator
    }

    async updateCreator(id: String, creator: CreatorsType) {
        const updateCreator = await creatorModel.findByIdAndUpdate(id, {
            name: creator.creatorName,
            comics: creator.creatorComics,
            picture: creator.creatorPicture
        }, {new: true})
        return updateCreator
    }

    async deleteCreator(id: String) {
        try {
            await creatorModel.findByIdAndDelete(id)
            return "Creator removed successfully"
        } catch (error) {
            throw new Error(`Error to remove creator: ${error}`)
        }
    }
}

export default new CreatorService()