import {makeAutoObservable} from "mobx"
export default class GrammarStore{
    constructor(){
        this._grammar = []
        this._rule = []
        makeAutoObservable(this)
    }


    setGrammar(grammars){
        this._grammar = grammars
    }

    setRule(rules){
        this._rule = rules
    }

    get grammars(){
        return this._grammar
    }

    get rules(){
        return this._rule
    }
}