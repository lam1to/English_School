import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import LogoHeader from '../../img/logo.png';

import '../../Styles/navbar.css';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTR_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';
import SliderMenu from './SliderMenu';
import { useTranslation } from 'react-i18next';

const NavBar = observer(() => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { userStore } = useContext(Context);
  const { name, img } = userStore.user;
  const [t, i18n] = useTranslation();
  return (
    <header className="header_main">
      <div className="header_container _container">
        <div className="navbar_block_main">
          <Link to={MAIN_ROUTE} className="header_logo">
            <img src={LogoHeader} alt="logoHeader" />
          </Link>
          {!userStore.isAuth ? (
            <div className="header_row">
              <div className="header_buttom">
                <Link to={LOGIN_ROUTE}>{t('header.sign-in')}</Link>
              </div>
              <div className="header_buttom">
                <Link to={REGISTR_ROUTE}>{t('header.sign-up')}</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="header_row">
                <div className="header_buttom" onClick={handleClick}>
                  {t('header.account')}
                </div>
                <div className="header_buttom">{name ? name : ''}</div>
                <div style={{ marginLeft: '10px' }}>
                  <img
                    style={{ borderRadius: '10px' }}
                    width="48px"
                    height="48px"
                    src={`${
                      img ? `${process.env.REACT_APP_API_URL}${img}` : '/img/header/empty.png'
                    }`}
                  />
                </div>
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
