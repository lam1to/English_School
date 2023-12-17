import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { registration } from '../http/userAPI';
import { VOCABULARY_ROUTE } from '../utils/consts';
import { Box, Button, Card, Stack, TextField } from '@mui/material';
import auth_img from '../img/auth_img.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../Styles/auth.css';
import TextInput from '../components/Form/TextInput';
import regexConfig from '../Config/RegexConfig';
import CustomButton from '../components/Form/CustomButton';

const Registration = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
    mode: 'onChange',
  });
  const onSubmit = async (mainData) => {
    console.log('data', mainData);
    try {
      let data;
      data = await registration(
        mainData.firstName,
        mainData.lastName,
        mainData.email,
        mainData.password
      );
      console.log(data);
      user.setUser(data);
      user.setIsAuth(true);
      navigate(VOCABULARY_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="main_auth">
      <div className="_container main_auth_container">
        <Card
          sx={{
            width: '80%',
            borderRadius: '20px',
            boxShadow:
              ' 1px 1px 10px 1px rgba(0, 0, 0, 0.1), 30px 30px 0px 2px #e4f3f9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className="form">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="auth-title">SIGN UP</div>
              <TextInput
                form={form}
                name="firstName"
                nameField="First name"
                rules={{
                  required: { value: true, message: 'First name is required' },
                }}
              />
              <TextInput
                form={form}
                name="lastName"
                nameField="Last name"
                rules={{
                  required: { value: true, message: 'Last name is required' },
                }}
              />
              <TextInput
                form={form}
                name="email"
                nameField="Email"
                rules={{
                  required: { value: true, message: 'Email is required' },
                }}
              />
              <TextInput
                form={form}
                name="password"
                nameField="Password"
                rules={{
                  required: { value: true, message: 'Password is required' },
                  minLength: {
                    value: 8,
                    message:
                      'Password is too short - should be 8 chars minimum.',
                  },
                  validate: {
                    valid: (value) => {
                      if (!regexConfig.minOneLowerCase.test(value))
                        return 'Must contain at least one lowercase character';
                      if (!regexConfig.minOneUpperCase.test(value))
                        return 'Must contain at least one uppercase character';
                      if (!regexConfig.minOneSpecSymbol.test(value))
                        return 'Must contain at least one special character';
                    },
                  },
                }}
                isPassword={true}
              />
              <CustomButton
                onClick={form.handleSubmit(onSubmit)}
                title="Sing up"
              ></CustomButton>
            </form>
          </div>
          <div className="auth_img">
            <img src={auth_img}></img>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
