
class Auth {
    login(userName, password) {
        return fetch('http://localhost:3000/login')    
    }
}

let auth = new Auth();
auth.login('ganesh', 'ghalame');