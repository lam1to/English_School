const {Grammar,Rule} = require('../models/models')
const ApiError = require('../error/ApiError')
class GrammarController{
    async create(req,res){
        let {topic} = req.body
        const grammar = await Grammar.create({topic})
        // if(rules){
        //     rules = JSON.parse(rules)
        //     rules.forEach(i => {
        //         Rule.create({
        //             topic: i.topic,
        //             content: i.content,
        //             grammarid: grammar.id
        //         })
        //     });
        // }
        return res.json({grammar})
    }
    async getAll(req,res){
        const grammars = await Grammar.findAll()
        return res.json(grammars)

    }
    
    async getOne(req,res){
        const {id} = req.params 
        const grammar = await Grammar.findOne({where: {id}})
        return res.json(grammar)
    }
}


module.exports = new GrammarController()