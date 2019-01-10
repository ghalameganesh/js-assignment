const axios = require('axios');

class RestService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
    };

    get(url) {
        return axios.get(this.baseUrl + url);
    }
}

class UserService extends RestService{
    constructor() {
        
    }
}

let rest = new RestService();
rest.get('login').then(response => {    
    console.log( response.data );
}).catch(error => {
  console.log(error)
});