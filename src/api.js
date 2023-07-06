import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const createLog = (log) => {
  return axios.post(`${API}/logs/`, log);
};

const getLog = (index) => {
  return axios.get(`${API}/logs/${index}`);
};

const deleteLog = (index) => {
  return axios.delete(`${API}/logs/${index}`);
};

const getLogs = () => {
  return axios.get(`${API}/logs`);
};

const updateLog = (index, log) => {
  return axios.put(`${API}/logs/${index}`, log);
};
export { createLog, getLog, deleteLog, getLogs, updateLog };
