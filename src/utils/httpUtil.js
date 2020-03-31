import { httpBase } from './httpBaseUtil';

export const fetch = (endpoint, params) => {
  return httpBase().get(`/${endpoint}`, { params });
};

export const store = (endpoint, data) => {
  return httpBase().post(`/${endpoint}`, data);
};

export const update = (endpoint, data) => {
  return httpBase().put(`/${endpoint}`, data);
};

export const destroy = (endpoint, id) => {
  return httpBase().delete(`/${endpoint}/${id}`);
};
