import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import LogoHeader from '../img/logo.png';

import '../Styles/navbar.css';
import { observer } from 'mobx-react-lite';
import {
  ADMIN_ROUTE,
  EXERCISES_ROUTE,
  GRAMMAR_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTR_ROUTE,
  VOCABULARY_ROUTE,
} from '../utils/consts';
import { Link } from 'react-router-dom';

const NavBar = observer(() => {
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  };
  const { user } = useContext(Context);
  return (
    <header className="header_main">
      <div className="header_container _container">
        {!user.isAuth ? (
          <div className="navbar_block_main">
            <Link to={MAIN_ROUTE} className="header_logo">
              <img src={LogoHeader} alt="logoHeader" />
            </Link>
            <div className="header_row">
              <div className="header_buttom">
                <Link to={LOGIN_ROUTE}>Sign in</Link>
              </div>
              <div className="header_buttom">
                <Link to={REGISTR_ROUTE}>Sign up</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar_block_main">
            <Link className="header_logo">
              <img src={LogoHeader} alt="logoHeader" />
            </Link>
            <div className="header_row">
              {user.user.role == 'ADMIN' && (
                <div className="header_buttom">
                  <Link to={ADMIN_ROUTE}>Admin panel</Link>
                </div>
              )}
              <div className="header_buttom">
                <Link to={VOCABULARY_ROUTE}>Vocabulary</Link>
              </div>
              <div className="header_buttom">
                <Link to={GRAMMAR_ROUTE}>Grammar</Link>
              </div>
              <div className="header_buttom ">
                <Link to={EXERCISES_ROUTE}>Exercises</Link>
              </div>

              <div className="header_buttom">
                <Link to={MAIN_ROUTE} onClick={() => logOut()}>
                  Exit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

export default NavBar;
