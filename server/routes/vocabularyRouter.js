const Router = require('express');
const router = new Router();
const vocabularyController = require('../controllers/vocabularyController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(['ADMIN']), vocabularyController.create);
router.get('/', vocabularyController.getAll);
router.get('/:id', vocabularyController.getOne);

module.exports = router;
