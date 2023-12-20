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
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation();
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
              <div className="auth-title">{t('auth.signup')}</div>
              <TextInput
                form={form}
                name="firstName"
                nameField={t('auth.first_name.label')}
                rules={{
                  required: {
                    value: true,
                    message: `${t('auth.first_name.label')}`,
                  },
                }}
              />
              <TextInput
                form={form}
                name="lastName"
                nameField={t('auth.last_name.label')}
                rules={{
                  required: {
                    value: true,
                    message: `${t('auth.last_name.label')}`,
                  },
                }}
              />
              <TextInput
                form={form}
                name="email"
                nameField={t('auth.email.label')}
                rules={{
                  required: {
                    value: true,
                    message: `${t('auth.email.label')}`,
                  },
                }}
              />
              <TextInput
                form={form}
                name="password"
                nameField={t('auth.password.label')}
                rules={{
                  required: {
                    value: true,
                    message: `${t('auth.password.label')}`,
                  },
                  minLength: {
                    value: 8,
                    message: `${t('auth.password.error_min')}`,
                  },
                  validate: {
                    valid: (value) => {
                      if (!regexConfig.minOneLowerCase.test(value))
                        return t('auth.password.error_lower');
                      if (!regexConfig.minOneUpperCase.test(value))
                        return t('auth.password.error_upper');

                      if (!regexConfig.minOneSpecSymbol.test(value))
                        return t('auth.password.error_spec');
                    },
                  },
                }}
                isPassword={true}
              />
              <CustomButton
                isOutline={false}
                isSmall={false}
                onClick={form.handleSubmit(onSubmit)}
                title={t('button.signup')}
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
