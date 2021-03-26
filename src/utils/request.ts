import axios from 'axios'

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const client = axios.create({
  baseURL: '',
  timeout: 16000,
  headers: {
    [CONTENT_TYPE]: APPLICATION_JSON
  }
});

export { client };