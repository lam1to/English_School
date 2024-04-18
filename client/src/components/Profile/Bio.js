import { Card } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import TextInput from '../Form/TextInput';
import CustomDatePicker from '../Form/CustomDatePicker';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';

const Bio = observer(() => {
  const { t } = useTranslation();
  const form = useFormContext();
  const { userStore } = useContext(Context);
  const { user, isEditMode } = userStore;
  const { phone, email, location, birthday } = user;
  const copyData = (flag) => {
    switch (flag) {
      case 0:
        navigator.clipboard.writeText(phone);
        break;
      case 1:
        navigator.clipboard.writeText(email);
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
              <div className={`${isEditMode ? 'block-img' : 'block-img-normal'}`}>
                <img width="24px" src="/img/profile/number.png" alt="number" />
              </div>
              {isEditMode ? (
                <TextInput form={form} name="phone" small={true} placeholder="Phone number" />
              ) : (
                <p>{phone ? phone : 'none'}</p>
              )}
            </div>
            <div
              style={{
                display: `${isEditMode ? 'none' : 'block'}`,
                cursor: 'pointer',
              }}
              onClick={() => {
                copyData(0);
              }}
              className={`${!isEditMode && 'block-img-normal'}`}
            >
              <img src="/img/profile/copy.png" />
            </div>
          </li>
          <li className="copy">
            <div className="container-img-value">
              <img src="/img/profile/email.png" alt="email" />
              <p>{email}</p>
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
            <div className={`${isEditMode ? 'block-img' : 'block-img-normal'}`}>
              <img width="24px" src="/img/profile/location.png" alt="point" />
            </div>
            {isEditMode ? (
              <TextInput form={form} name="location" small={true} placeholder="Location" />
            ) : (
              <p>{location ? location : 'none'}</p>
            )}
          </li>
          <li>
            <div className={`${isEditMode ? 'block-img' : 'block-img-normal'}`}>
              <img src="/img/profile/hb.png" alt="hb" />
            </div>
            {isEditMode ? (
              <CustomDatePicker form={form} name="hb" small={true} />
            ) : (
              <p>{birthday ? new Date(birthday).toDateString() : 'none'}</p>
            )}
          </li>
        </ul>
      </div>
    </Card>
  );
});
export default Bio;
