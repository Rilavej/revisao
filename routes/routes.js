const express = require('express')
const controller = require('../controllers/controller.js')

const router = express.Router()

router.get('/', controller.index)

// Rotas da lista de exercicios 1 questão 2
router.get('/produtos', controller.produtos)
router.get('/sobre', controller.sobre)
router.get('/produtos/:id', controller.produto_id)

module.exports = router // para ser importado em app.js
