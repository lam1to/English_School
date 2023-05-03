import {makeAutoObservable} from "mobx"
export default class UserStore{
    constructor(){
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        console.log("isAuth = ", this._isAuth)
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}