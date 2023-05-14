const {Question} = require('../models/models')
const ApiError = require('../error/ApiError')
class QuestionController{
    async create(req,res){
        let {question, testId} = req.body
        const questionOne = await Question.create({question,testId})
        return res.json({questionOne})
    }
    async getAll(req,res){
        const question= await Question.findAll()
        return res.json(question)

    }
    async getOne(req,res){
        const {id} = req.params 
        const question = await Question.findOne({where: {id}})
        return res.json(question)
    }
}


module.exports = new QuestionController()