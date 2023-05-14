import {makeAutoObservable} from "mobx"
export default class TestStore{
    constructor(){
        this._test = []
        this._topicS =  [
            {id: 1, name: 'Articles'},
            {id: 2, name: 'Verb'},
            {id: 3, name: 'Pronunciation'},
            {id: 4, name: 'Nouns'}
        ]
        this._levelS = [
            {id:1, name:'A1-elementary'},
            {id:2, name:'A2-pre-intermidiate'},
            {id:3, name:'B1-intermediate'},
            {id:4, name:'B2-upper-intermediate'},
            {id:5, name:'C1-advanced'},
            {id:6, name:'C2-proeficiency'},

        ]
        this._question = []
        this._answer = []
        this._indexTest = 0
        this._levelFlag = 'A1'
        this._topicFlag = 'Articles'
        makeAutoObservable(this)
    }
    setLevelFlag(levelFlags){
        this._levelFlag = levelFlags
    }
    setTopicFlag(topicFlags){
        this._topicFlag = topicFlags
    }
    setTest(tests){
        this._test = tests
    }
    setQuestion(questions){
        this._question = questions
    }
    setAnswer(answers){
        this._answer = answers
    }
    setIndexTest(index){
        this._indexTest = index
    }

    get levelFlags(){
        return this._levelFlag
    }

    get topicFlags(){
        return this._topicFlag
    }

    get indexTest(){
        
        return this._indexTest
    }

    get tests(){
        return this._test
    }
    get questions(){
        return this._question
    }
    get answers(){
        return this._answer
    }
    get topicS(){
        return this._topicS
    }
    get levelS(){
        return this._levelS
    }
}