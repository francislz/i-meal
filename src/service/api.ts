import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://data.sfgov.org/resource/rqzj-sfat.json',
});

