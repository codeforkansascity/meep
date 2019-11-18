
import axios from 'axios';

export default () => {
  const store = [];
  axios.get('http://www.meepmetroenergy.xyz:18773/projects/18/summary')
    .then(res => {
      console.log(res);
    })
    .then(err => {
      console.log(err);
    })
  return store;
};