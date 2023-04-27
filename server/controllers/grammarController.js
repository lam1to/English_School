const {Grammar} = require('../models/models')
const ApiError = require('../error/ApiError')
class GrammarController{
    async create(req,res){
        const {name} = req.body
        const grammar = await Grammar.create({name})
        return res.json({grammar})
    }
    async getAll(req,res){
        const grammars = await Grammar.findAll()
        return res.json(grammars)

    }
    async getOne(req,res){
        const grammarOne  = await Grammar.findOne()
        return res.json(grammarOne)
    }
}


module.exports = new GrammarController()