const axios = require('axios');

class RestService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    };

    get(url) {
        return axios.get(this.baseUrl + url);
    }
}

export default RestService;
