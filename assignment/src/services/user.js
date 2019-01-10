import RestService from "./rest-api";

class UserService extends RestService{
    constructor()  {
        super();
    }

    getUsers(id) {
        return this.get(`organizations/${id}/users`);
    }
}

export default UserService;