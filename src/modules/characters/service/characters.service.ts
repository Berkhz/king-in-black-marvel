import axios from 'axios'
import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = "fb0ecbf1e8cbb00c85ee9466b918904f"
const privateKey = "78cf31e0e1a4d176edec676498f402f52b20660b"
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

class CharacterService {

}

export default new CharacterService()