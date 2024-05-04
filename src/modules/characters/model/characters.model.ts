import { Schema, model } from 'mongoose'

const charactersScheme = new Schema({
    name: String,
    description: String,
    picture: String,
}, { timestamps: true })

export default model("Character", charactersScheme)