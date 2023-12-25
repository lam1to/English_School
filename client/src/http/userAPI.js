import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (userName, lastName, email, password) => {
  const { data } = await $host.post('api/user/registration', {
    userName,
    lastName,
    email,
    password,
    role: 'ADMIN',
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (userName, password) => {
  const { data } = await $host.post('api/user/login', { userName, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getUserInfo = async (userId) => {
  const { data } = await $host.get(`api/user-information/${userId}`);
  if (data) return data;
};

export const updateUserInfo = async (dataUpdate) => {
  const { data } = await $host.post('api/user-information/update', dataUpdate);
  return data;
};

export const updateUserImg = async (dataUpdate) => {
  const { data } = await $host.post(
    'api/user-information/update_img',
    dataUpdate
  );
  return data;
};
