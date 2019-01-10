const axios = require('axios');

class RestService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    };

    get(url) {
        return axios.get(this.baseUrl + url);
    }
}

let rest = new RestService();
rest.get('login').then(response => {    
    console.log( response.data );
}).catch(error => {
  console.log(error)
});