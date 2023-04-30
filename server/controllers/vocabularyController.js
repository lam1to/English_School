const {Vocabulary} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class VocabularyController{
    async create(req,res, next){
        try{
            const {topic,description,content} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const vocabulary = await Vocabulary.create({topic,description,content,img:fileName})
            return res.json({vocabulary})
        }
        catch(e){
            next(ApiError.badRequest('произошла ошибка'))
        }
       
    }
    async getAll(req,res){
        const vocabularyAll = await Vocabulary.findAll()
        return res.json(vocabularyAll)
    }
    async getOne(req,res){
        const vocabularyOne = await Vocabulary.findOne()
        return res.json(vocabularyOne)
    }
}


module.exports = new VocabularyController()