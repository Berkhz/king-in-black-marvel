import creatorModel from "../model/creators.model"
import { CreatorsType } from "../types/creators.types"

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