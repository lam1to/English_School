const Router = require('express');
const router = new Router();
const userInformationController = require('../controllers/userInformationController');
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', userInformationController.create);
router.get('/:id', userInformationController.getInformation);
router.post('/update', userInformationController.update);
router.post('/update_img', userInformationController.updateImg);

module.exports = router;
