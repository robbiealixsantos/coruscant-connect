import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        //Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //Delete auth header
        console.log(axios.defaults.headers.common['Authorization']);
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;