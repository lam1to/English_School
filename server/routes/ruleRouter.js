const Router = require('express');
const router = new Router();
const ruleController = require('../controllers/ruleController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(['ADMIN']), ruleController.create);
router.get('/', ruleController.getAll);
router.get('/:id', ruleController.getOne);

module.exports = router;
