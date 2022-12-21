import axios from 'axios';
import {ROAST_CONFIG} from '../js/config';

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default {


}
