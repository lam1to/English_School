const Router = require('express');
const router = new Router();
const userInformationController = require('../controllers/userInformationController');
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', userInformationController.create);
router.get('/', userInformationController.getInformation);
router.post('/update', userInformationController.update);

module.exports = router;
