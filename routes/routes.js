const express = require('express')
const controller = require('../controllers/controller.js')

const router = express.Router()

router.get('/', controller.index)
router.get('/teste', controller.teste)
router.get('/controller', controller.object)

module.exports = router // para ser importado em app.js
