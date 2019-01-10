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
                        console.log(`orgnization details${JSON.stringify(response[0].data)}`);
                        console.log(`For orgnizations:${organization.id}, Users:${JSON.stringify(response[1].data)}`);
                    }));
                });
            })
            .catch(this.failureCallback);
        } catch(error) {
            console.error(`Error occured while executing promises: ${error.message}`);
        }
        
    }

    handleLogin(successResponse) {
        if (successResponse.data.status === 'suddccess') {
            console.log('User Logged in successfully using promise');
            return (orgService.getAllOrgnizations());
        }
        rejects("Error Login");
    }

    failureCallback(errorResponse) {
        console.log(`errorResponse: ${JSON.stringify(errorResponse)}`);
    }
}

export default PromiseDemo;