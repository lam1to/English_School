const {Test} = require('../models/models')
const ApiError = require('../error/ApiError')
class TestController{
    async create(req,res){
        const {topic,difficulte,level} = req.body
        const test = await Test.create({topic,difficulte,level})
        return res.json({test})
    }
    async getAll(req,res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const tests = await Test.findAndCountAll({limit,offset})
        return res.json(tests)
    }
    async getOne(req,res){
        const testOne =await Test.findOne()
        return res.json(testOne)
    }
}


module.exports = new TestController()