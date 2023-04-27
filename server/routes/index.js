const Router = require('express')
const router = new Router()
const grammarRouter = require('./grammarRouter')
const testRouter = require('./testRouter')
const userRouter = require('./UserRouter')
const vocabularyRouter = require('./vocabularyRouter')



router.use('/user', userRouter)
router.use('/grammar',grammarRouter)
router.use('/test', testRouter)
router.use('/vocabulary', vocabularyRouter)


module.exports = router;