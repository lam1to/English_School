import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import LogoHeader from '../../img/logo.png';

import '../../Styles/navbar.css';
import { observer } from 'mobx-react-lite';
import {
  ADMIN_ROUTE,
  EXERCISES_ROUTE,
  GRAMMAR_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTR_ROUTE,
  VOCABULARY_ROUTE,
} from '../../utils/consts';
import { Link } from 'react-router-dom';
import SliderMenu from './SliderMenu';

const NavBar = observer(() => {
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user } = useContext(Context);
  return (
    <header className="header_main">
      <div className="header_container _container">
        <div className="navbar_block_main">
          <Link to={MAIN_ROUTE} className="header_logo">
            <img src={LogoHeader} alt="logoHeader" />
          </Link>
          {!user.isAuth ? (
            <div className="header_row">
              <div className="header_buttom">
                <Link to={LOGIN_ROUTE}>Sign in</Link>
              </div>
              <div className="header_buttom">
                <Link to={REGISTR_ROUTE}>Sign up</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="header_row">
                <div className="header_buttom" onClick={handleClick}>
                  My account
                </div>
                <div className="header_buttom">{user.user.email}</div>
              </div>
              <SliderMenu anchorEl={anchorEl} handleClose={handleClose} />
            </>
          )}
        </div>
      </div>
    </header>
  );
});

export default NavBar;
