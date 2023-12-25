import { Card } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import TextInput from '../Form/TextInput';
import CustomDatePicker from '../Form/CustomDatePicker';

const Bio = ({ isEdit, t, form, userData }) => {
  const { user } = useContext(Context);

  const copyData = (flag) => {
    switch (flag) {
      case 0:
        navigator.clipboard.writeText(userData.phone);
        break;
      case 1:
        navigator.clipboard.writeText(user.user.email);
        break;
      default:
        navigator.clipboard.writeText(this.state.textToCopy);
        break;
    }
  };
  return (
    <Card
      sx={{
        boxShadow: '9px 9px 23px 1px rgba(0,0,0,0.1)',
      }}
      className="card-bio"
    >
      <h5>{t('profile.bio')}</h5>
      <hr />
      <div>
        <ul>
          <li className="copy">
            <div className="container-img-value">
              <div className={`${isEdit ? 'block-img' : 'block-img-normal'}`}>
                <img width="24px" src="/img/profile/number.png" alt="number" />
              </div>
              {isEdit ? (
                <TextInput
                  form={form}
                  name="phone"
                  small={true}
                  placeholder="Phone number"
                />
              ) : (
                <p>{userData ? userData.phone : '+375 (29) 000-00-00'}</p>
              )}
            </div>
            <div
              style={{
                display: `${isEdit ? 'none' : 'block'}`,
                cursor: 'pointer',
              }}
              onClick={() => {
                copyData(0);
              }}
              className={`${!isEdit && 'block-img-normal'}`}
            >
              <img src="/img/profile/copy.png" />
            </div>
          </li>
          <li className="copy">
            <div className="container-img-value">
              <img src="/img/profile/email.png" alt="email" />
              <p>{user.user.email}</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => {
                copyData(1);
              }}
            >
              <img src="/img/profile/copy.png" />
            </div>
          </li>
          <li>
            <div className={`${isEdit ? 'block-img' : 'block-img-normal'}`}>
              <img width="24px" src="/img/profile/location.png" alt="point" />
            </div>
            {isEdit ? (
              <TextInput
                form={form}
                name="location"
                small={true}
                placeholder="Location"
              />
            ) : (
              <p>{userData ? userData.location : 'Belarus, Gomel'}</p>
            )}
          </li>
          <li>
            <div className={`${isEdit ? 'block-img' : 'block-img-normal'}`}>
              <img src="/img/profile/hb.png" alt="hb" />
            </div>
            {isEdit ? (
              <CustomDatePicker form={form} name="hb" small={true} />
            ) : (
              <p>{userData ? userData.birthday : 'December 24'}</p>
            )}
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default Bio;
