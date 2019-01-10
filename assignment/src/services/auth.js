import RestService from "./rest-api";
// const axios = require('axios');

class AuthService extends RestService{
    constructor()  {
        super();
    }
    
    login() {
        return this.get('login')
    }
}

export default AuthService;