import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const createTest = async (test) => {
  const { data } = await $authHost.post('api/test', test);
  return data;
};

export const fetchTest = async () => {
  const { data } = await $host.get('api/test');
  return data;
};

export const fetchOneTest = async (id) => {
  const { data } = await $host.get('api/test/' + id);
  return data;
};

export const getOneTestWithData = async (id) => {
  const { data } = await $host.get(`api/test/${id}/with/data`);
  return data;
};

export const finishTest = async (payload) => {
  return await $authHost.post('api/attempt', payload);
};
