import React, { useContext, useEffect } from 'react'
import { Context } from '..' 
import LogoHeader from '../img/logoHeader.svg'

import '../Styles/navbar.css'
import { observer } from 'mobx-react-lite'
import { ADMIN_ROUTE, EXERCISES_ROUTE, GRAMMAR_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTR_ROUTE, VOCABULARY_ROUTE } from '../utils/consts'
import { Link } from 'react-router-dom'




const NavBar = observer(() => {
    const {user} = useContext(Context)
    const role = 'Admin'
    return (
        <header className="header_main">
            <div className="header_container _container">
                <Link to={MAIN_ROUTE} className="header_logo">   
                    <img src={LogoHeader} alt="logoHeader"/>
                </Link>
                {!user.isAuth 
                    ?<div class="header_sign_row header_sign_row_no-authorized">
                        <Link to={LOGIN_ROUTE}>
                            <div class="header_buttom_sign_in">
                                Sign in
                            </div>
                        </Link>
                        <div class="header_buttom_sign_up">
                            <Link to={REGISTR_ROUTE}>Sign up</Link>
                        </div>
                    </div>
                    :<div class="header_sign_row header_sign_row-authorized">
                        {role === 'Admin' && 
                            <div class="header_buttom">
                                <Link to={ADMIN_ROUTE} >Admin panel</Link>
                            </div>
                        }
                        <div class="header_buttom">
                            <Link to={VOCABULARY_ROUTE} >Vocabulary</Link>
                        </div>
                        <div class="header_buttom">
                            <Link to={GRAMMAR_ROUTE} >Grammar</Link>
                        </div>
                        <div class="header_buttom ">
                            <Link to={EXERCISES_ROUTE} >Exercises</Link>
                        </div>

                        <div  class="header_buttom">
                            <Link to={MAIN_ROUTE} onClick={() => {user.setIsAuth(false)}} >Exit</Link>
                        </div>
                     </div>
                }
            </div>
        </header>
    )
});

export default NavBar