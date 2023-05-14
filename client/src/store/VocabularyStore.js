import {makeAutoObservable} from "mobx"
export default class VocabularyStore{
    constructor(){
        this._vocabulary = []
        makeAutoObservable(this)
    }

    setVocabulary(vocabularys){
        this._vocabulary = vocabularys
    }

    get vocabularys(){
        return this._vocabulary
    }
}