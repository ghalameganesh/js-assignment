import AuthService from "../services/auth";
import OrganizationService from "../services/orgnization";
import UserService from "../services/user";
import {
    rejects
} from "assert";
let authService = new AuthService();
let orgService = new OrganizationService();
let userService = new UserService();
class PromiseDemo {
    constructor() {
        console.log(`*********************Executing PromiseDemo***********************`);
    }
    execute() {
        try {
            authService.login()
            .then(this.handleLogin)
            .then(function (organizationListResp) {
                const organizationList = organizationListResp.data;
                const usersMap = new Map();
                organizationList.forEach(organization => {
                    Promise.all([orgService.getOrgnizationDetail(organization.id), userService.getUsers(organization.id)]).then((response => {
                        usersMap.set(response[0].data, response[1].data);
                        console.log(`**PromiseDemo** orgnization details${JSON.stringify(response[0].data)}`);
                        console.log(`**PromiseDemo** For orgnizations:${organization.id}, Users:${JSON.stringify(response[1].data)}`);
                    }));
                });
            })
            .catch(this.failureCallback);
        } catch(error) {
            console.error(`**PromiseDemo** Error occured while executing promises: ${error.message}`);
        }
        
    }

    handleLogin(successResponse) {
        if (successResponse.data.status === 'success') {
            console.log('**PromiseDemo** User Logged in successfully using promise');
            return (orgService.getAllOrgnizations());
        }
        rejects("**PromiseDemo** Error Login");
    }

    failureCallback(errorResponse) {
        console.log(`**PromiseDemo** errorResponse: ${JSON.stringify(errorResponse)}`);
    }
}

export default PromiseDemo;