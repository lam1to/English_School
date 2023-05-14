const {Grammar,Rule} = require('../models/models')
const ApiError = require('../error/ApiError')
class RuleController{
    async create(req,res){
        let {topic,content,grammarId} = req.body
        console.log(grammarId)
        const rule = await Rule.create({topic,content,grammarId})
        return res.json({rule})
    }
    async getAll(req,res){
        const rules= await Rule.findAll()
        return res.json(rules)

    }
    async getOne(req,res){
        const {id} = req.params 
        const rule = await Rule.findOne({where: {id}})
        return res.json(rule)
    }
}


module.exports = new RuleController()