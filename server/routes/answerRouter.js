const Router = require('express');
const router = new Router();
const answerController = require('../controllers/answerController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(['ADMIN']), answerController.create);
router.get('/', answerController.getAll);
router.get('/:id', answerController.getOne);

module.exports = router;
