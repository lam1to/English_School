const Router = require('express');
const router = new Router();
const attemptController = require('../controllers/attemptController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(['ADMIN', 'USER']), attemptController.create);
router.get('/', attemptController.getAll);
router.get('/:id', attemptController.getOne);

module.exports = router;
