import characterModel from "../model/characters.model"
import { CharactersType } from "../types/characters.types"

class CharacterService {
    async createCharacter(character: CharactersType) {
        const createdCharacter = await characterModel.create(character)
        return createdCharacter
    }

    async findCharacterByName(name: string | RegExp) {
        const findedCharacters = await characterModel.findOne({ name: { $regex: new RegExp(name, 'i') } })
        return findedCharacters;
    }

    async findAllCharacters() {
        const findedCharacters = await characterModel.find()
        return findedCharacters
    }

    async findCharacterById(id: String) {
        const findedCharacter = await characterModel.findById(id) 
        return findedCharacter
    }

    async updateCharacter(id: String, character: CharactersType) {
        const updateCharacter = await characterModel.findByIdAndUpdate(id, {
            name: character.characterName,
            description: character.characterDescription,
            picture: character.characterPicture
        }, {new: true})
        return updateCharacter
    }

    async deleteCharacter(id: String) {
        try {
            await characterModel.findByIdAndDelete(id)
            return "Character removed successfully"
        } catch (error) {
            throw new Error(`Error to remove character: ${error}`)
        }
    }
}

export default new CharacterService()