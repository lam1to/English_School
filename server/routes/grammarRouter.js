const Router = require('express')
const router = new Router()
const grammarController = require('../controllers/grammarController')

router.post('/', grammarController.create)
router.get('/', grammarController.getAll)
router.get('/:id', grammarController.getOne)


module.exports = router;