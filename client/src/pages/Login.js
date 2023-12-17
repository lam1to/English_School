import React, {useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import LoginImg from '../img/block_login_img.png'
import '../Styles/login.css'
import { observer } from 'mobx-react-lite'
import { Context } from '..';
import { login } from '../http/userAPI'
import { EXERCISES_ROUTE, VOCABULARY_ROUTE } from '../utils/consts';

const Login = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = async() => {
    try{
      let data;
      data = await login(email,password)
      console.log(data)
      user.setUser(data)
      user.setIsAuth(true)
      console.log("user. role = ", user.user.role)
      user.setRole(user.user.role)
      navigate(VOCABULARY_ROUTE)
    }
    catch(e) {
      alert(e.response.data.message)
    }
  }
  return (
    <div className="main_login">
            <div className="main_login-container _container">
                <div className="block_login">
                    <div className="block_login_container">
                        <div className="block_login-title">
                            SIGN IN
                        </div>
                        <div className="block_login-sub_titel">
                            Вход
                        </div>
                        <div className="block_login-block-input-form">
                            <form className="block_login-block-form-username login-form_margin">
                               <input type="text" name="Username" placeholder="Username" className="block_login-block-input" value={email} onChange={e => setEmail(e.target.value)}/>
                            </form> 
                            <form className="block_login-block-form-password login-form_margin">
                                <input type="password" name="Password" placeholder="Password" className="block_login-block-input" value={password} onChange={ e => setPassword(e.target.value)}/>
                            </form>
                        </div>
                        <a className="block_login-link_button">
                            <div onClick={signIn} className="block_login-button blue_button-little" >
                                SIGN IN
                            </div>
                        </a>
                    </div>
                    <div className="block_login-img_absolute">
                        <img src={LoginImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
  )
});

export default Login