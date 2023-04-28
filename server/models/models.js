const sequelize = require('../db')
const {DataTypes, DATE} = require('sequelize')


const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role:{type:DataTypes.STRING, defaultValue: "USER"}
})

const Test = sequelize.define('test',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true},
    difficulte: {type: DataTypes.STRING, defaultValue: "easy"},
    level:{type:DataTypes.STRING, defaultValue: "A1"}
})


const Question = sequelize.define('question',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    question: {type: DataTypes.STRING, allowNull: false}
})


const Answer = sequelize.define('answer',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING}
})

const Vocabulary = sequelize.define('vocabulary',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING, defaultValue: ""},
    content: {type: DataTypes.STRING,defaultValue: ""},
    img: {type:DataTypes.STRING,defaultValue: ""}
    
})

const Grammar = sequelize.define('grammar',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true}
})

const Rule = sequelize.define('rule',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true},
    content: {type: DataTypes.STRING,allowNull: false}
})

Grammar.hasMany(Rule, {as: 'rules'})
Rule.belongsTo(Grammar)

Test.hasMany(Question)
Question.belongsTo(Test)

Question.hasMany(Answer)
Answer.belongsTo(Question)

module.exports = {
    User,
    Test,
    Question,
    Answer,
    Vocabulary,
    Grammar,
    Rule
}








