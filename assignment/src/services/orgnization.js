import RestService from "./rest-api";

class OrganizationService extends RestService{
    constructor()  {
        super();
    }
    
    getAllOrgnizations() {
        return this.get('organizations');
    }

    getOrgnizationDetail(id) {
        return this.get('organizations/' + id);
    }

    
}

export default OrganizationService;