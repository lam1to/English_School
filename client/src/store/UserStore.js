import { makeAutoObservable } from 'mobx';
export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._role = '';
    this._isEditMode = false;
    makeAutoObservable(this);
  }
  setRole(role) {
    this._role = role;
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setIsEditMode(value) {
    this._isEditMode = value;
  }
  get role() {
    return this._role;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get isEditMode() {
    return this._isEditMode;
  }
}
