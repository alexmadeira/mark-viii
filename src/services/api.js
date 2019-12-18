import axios from 'axios';

const api = axios.create({
  baseURL: 'https://data.alexmadeira.com.br',
});

export default api;
