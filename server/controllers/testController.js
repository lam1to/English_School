const {Test} = require('../models/models')
const ApiError = require('../error/ApiError')
class TestController{
    async create(req,res){
        const {name} = req.body
        const test = await Test.create({name})
        return res.json({test})
    }
    async getAll(req,res){
        const tests = await Test.findAll()
        return res.json(tests)
    }
    async getOne(req,res){
        const testOne =await Test.findOne()
        return res.json(testOne)
    }
}


module.exports = new TestController()