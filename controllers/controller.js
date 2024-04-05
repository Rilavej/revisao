const path = require('path')

const controller = {}

controller.index = (req,res) => {
    res.sendFile(path.resolve(`${__dirname}/../views/index.html`)) // só funciona ultilizando a biblioteca path (linha 1)
}
controller.teste = (req,res) => {
    res.send("Teste de rota em andamento")
}
controller.object = (req,res) => {
    res.send(controller)
}
module.exports = controller // para ser importado em routes.js
