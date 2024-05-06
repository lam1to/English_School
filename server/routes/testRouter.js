const Router = require('express');
const router = new Router();
const testController = require('../controllers/testController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(['ADMIN']), testController.create);
router.get('/', testController.getAll);
router.get('/:id', testController.getOne);
router.get('/:id/with/data', testController.getTestWithData);

module.exports = router;
