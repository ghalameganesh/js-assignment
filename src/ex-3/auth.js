const axios = require('axios');

class Auth {
    login(userName, password) {
        return axios.get('http://localhost:3000/login')
    }
}

let auth = new Auth();
auth.login('ganesh', 'ghalame').then(response => {    
      console.log( response.data );
  }).catch(error => {
    console.log(error)
  });