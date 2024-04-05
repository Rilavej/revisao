const path = require('path')
var lista = require('../objects.js')

const controller = {}

controller.index = (req,res) => {
    res.sendFile(path.resolve(`${__dirname}/../views/index.html`)) // só funciona ultilizando a biblioteca path (linha 1)
}

controller.produtos = (req, res) => {
    res.send(lista)
}

controller.sobre = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../views/sobre.html'))
}

controller.produto_id = (req, res) => {
    let resposta_sim
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == Number(req.params.id)) {
            resposta_sim = true
        }      
    }
    if (resposta_sim) {
        res.send(lista[req.params.id])
    }
    else {
        res.send('Objeto não encontrado')
    }
}

module.exports = controller // para ser importado em routes.js
