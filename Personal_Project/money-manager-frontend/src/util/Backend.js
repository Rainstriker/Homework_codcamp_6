import axios from 'axios';
import qs from 'qs';

const url = 'http://localhost:8000/';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const Backend = {
  async register(requestBody) {
    await axios.post(`${url}users/register`, qs.stringify(requestBody), config);
  },

  async login(requestBody) {
    console.log(process.env.PORT)
    return await axios.post(`${url}users/login`, qs.stringify(requestBody), config);
  }
}

export default Backend;