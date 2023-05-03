import React from 'react'
import LoginImg from '../img/block_login_img.png'
import '../Styles/login.css'
const Login = () => {
  return (
    <div class="main_login">
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
                               <input type="text" name="Username" placeholder="Username" className="block_login-block-input"/>
                            </form> 
                            <form class="block_login-block-form-password login-form_margin">
                                <input type="text" name="Password" placeholder="Password" className="block_login-block-input"/>
                            </form>
                        </div>
                        <a href="" className="block_login-link_button">
                            <div className="block_login-button blue_button-little" >
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
}

export default Login