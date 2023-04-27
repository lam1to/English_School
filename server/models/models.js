const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
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
    question: {type: DataTypes.STRING}
})


const Answer = sequelize.define('answer',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING}
})

const Vocabulary = sequelize.define('vocabulary',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING, defaultValue: ""},
    img: {type:DataTypes.STRING},
    content: {type: DataTypes.STRING}
})

const Grammar = sequelize.define('grammar',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true}
})

const Rule = sequelize.define('rule',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, unique: true},
    content: {type: DataTypes.STRING}
})


Rule.hasMany(Grammar)
Grammar.belongsTo(Rule)

Question.hasMany(Test)
Test.belongsTo(Question)

Answer.hasMany(Question)
Question.belongsTo(Answer)


module.exports = {
    User,
    Test,
    Question,
    Answer,
    Vocabulary,
    Grammar,
    Rule
}








