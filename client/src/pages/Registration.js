import React from 'react'
import LoginImg from '../img/block_login_img.png'
const Registration = () => {
  return (
    <div className="main_login">
            <div className="main_login-container _container">
                <div className="block_login">
                    <div className="block_login_container">
                        <div className="block_login-title">
                            SIGN UP
                        </div>
                        <div className="block_login-sub_titel">
                            Регистрация
                        </div>
                        <div className="block_login-block-input-form">
                            <form className="block_login-block-form-username login-form_margin">
                               <input type="text" name="Username" placeholder="Username" className="block_login-block-input"/>
                            </form> 
                            <form className="block_login-block-form_Last-name login-form_margin">
                                <input type="text" name="Last name" placeholder="Last name" className="block_login-block-input"/>
                            </form>
                            <form className="block_login-block-form-Email login-form_margin">
                                <input type="text" name="Email" placeholder="Email" className="block_login-block-input"/>
                             </form> 
                             <form className="block_login-block-form-password login-form_margin">
                                 <input type="text" name="Password" placeholder="Password" className="block_login-block-input"/>
                             </form>
                        </div>
                        <a href="" className="block_login-link_button">
                            <div className="block_login-button blue_button-little" >
                                SIGN UP
                            </div>
                        </a>
                    </div>
                    <div className="block_login_registr-img_absolute">
                        <img src = {LoginImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Registration