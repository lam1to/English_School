const Router = require('express')
const router = new Router()
const grammarRouter = require('./grammarRouter')
const testRouter = require('./testRouter')
const userRouter = require('./UserRouter')
const vocabularyRouter = require('./vocabularyRouter')
const ruleRouter = require('./ruleRouter')
const questionRouter = require('./questionRouter')
const answerRouter = require('./answerRouter')


router.use('/user', userRouter)
router.use('/grammar',grammarRouter)
router.use('/test', testRouter)
router.use('/vocabulary', vocabularyRouter)
router.use('/rule', ruleRouter)
router.use('/question', questionRouter)
router.use('/answer', answerRouter)




module.exports = router;