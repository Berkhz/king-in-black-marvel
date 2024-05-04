import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'

class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware() {
        this.express.use(express.json())
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/king-in-black-marvel')
            console.log("Conectado com o banco de dados!")
        } catch (error) {
            console.error("Falha ao conectar com o banco de dados: ", error)
        }
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express