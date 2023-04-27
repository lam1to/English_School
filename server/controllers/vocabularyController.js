const {Vocabulary} = require('../models/models')
const ApiError = require('../error/ApiError')
class VocabularyController{
    async create(req,res){
        const {name} = req.body
        const vocabulary = await Test.create({name})
        return res.json({vocabulary})
    }
    async getAll(req,res){
        const vocabularyAll = await Test.findAll()
        return res.json(vocabularyAll)
    }
    async getOne(req,res){
        const vocabularyOne = await Test.findOne()
        return res.json(vocabularyOne)
    }
}


module.exports = new VocabularyController()