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

// let auth = new Auth();
// auth.login('ganesh', 'ghalame').then(response => {    
//       console.log( response.data );
//   }).catch(error => {
//     console.log(error)
//   });