import axios from 'axios';
import qs from 'qs';
import LocalStorageService from '../services/localStorageService';

axios.defaults.baseURL = 'http://localhost:8000/';

axios.interceptors.request.use(
  config => {
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded'}
    if (config.url.includes('/welcome') || config.url.includes('/login')) return config;
    const token = LocalStorageService.getToken();
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  err => {
    Promise.reject(err);
  }
);

const Backend = {
  
  // User GET method
  async getUserInfo() {
    return await axios.get('users/info');
  },

  // User POST method
  async register(requestBody) {
    await axios.post('users/register', qs.stringify(requestBody));
  },

  async login(requestBody) {
    return await axios.post('users/login', qs.stringify(requestBody));
  },

  // User PUT method
  async updateUserInfo(requestBody) {
    return await axios.put('users/update/info', qs.stringify(requestBody));
  },

  async updateUserPassword(requestBody) {
    return await axios.put('users/update/password', qs.stringify(requestBody));
  },

  // Account GET method
  async getAccounts() {
    return await axios.get('accounts/');
  },

  // Category GET method
  async getCategories() {
    return await axios.get('categories/');
  },

  // Transaction GET method  
  async getTansactions() {
    return await axios.get('transactions/');
  }
}

export default Backend;