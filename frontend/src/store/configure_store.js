import { createStore } from 'redux';
import axios from 'axios';

export default () => {
  const store = createStore();
  axios.get('https://localhost:locationMap');
  return store;
};