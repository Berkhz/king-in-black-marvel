import { Schema, model } from 'mongoose'

const creatorScheme = new Schema({
    name: String,
    comics: String,
    picture: String,
}, { timestamps: true })

export default model("Creator", creatorScheme)