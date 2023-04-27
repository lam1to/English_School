const Router = require('express')
const router = new Router()
const vocabularyController = require('../controllers/vocabularyController')


router.post('/',vocabularyController.create)
router.get('/', vocabularyController.getAll)
router.get('/:id', vocabularyController.getOne)

module.exports = router;