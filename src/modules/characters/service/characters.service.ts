import characterModel from "../model/characters.model"
import { CharactersType } from "../types/characters.types"

import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

class CharacterService {
    async createCharacter(character: CharactersType) {
        const createdCharacter = await characterModel.create(character)
        return createdCharacter
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