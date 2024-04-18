import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../img/block_login_img.png';
import { registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { MAIN_ROUTE, VOCABULARY_ROUTE } from '../utils/consts';
//@ts-check

const Registration = observer(() => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp = async () => {
    console.log('data = ', userName, lastName, email, password);
    try {
      let data;
      data = await registration(userName, lastName, email, password);
      console.log(data);
      userStore.setUser(data);
      userStore.setIsAuth(true);
      navigate(VOCABULARY_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div className="main_login">
      <div className="main_login-container _container">
        <div className="block_login">
          <div className="block_login_container">
            <div className="block_login-title">SIGN UP</div>
            <div className="block_login-sub_titel">Регистрация</div>
            <div className="block_login-block-input-form">
              <form className="block_login-block-form-username login-form_margin">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  className="block_login-block-input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </form>
              <form className="block_login-block-form_Last-name login-form_margin">
                <input
                  type="text"
                  name="Last name"
                  placeholder="Last name"
                  className="block_login-block-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </form>
              <form className="block_login-block-form-Email login-form_margin">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="block_login-block-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              <form className="block_login-block-form-password login-form_margin">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="block_login-block-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
            </div>
            <a className="block_login-link_button">
              <div onClick={signUp} className="block_login-button blue_button-little">
                SIGN UP
              </div>
            </a>
          </div>
          <div className="block_login_registr-img_absolute">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Registration;
