import app from './app'

function main() {
    app.listen(27017, 'localhost', () => {
        console.log("Servidor aberto na porta: 27017")
    })
}

main()