import { Schema, model } from 'mongoose'

const comicScheme = new Schema({
    title: String,
    description: String,
    datePublished: Date,
    picture: String
}, { timestamps: true })

export default model("Comic", comicScheme)