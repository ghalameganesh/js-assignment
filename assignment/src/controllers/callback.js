import AuthService from "../services/auth";
import OrganizationService from "../services/orgnization";
import UserService from "../services/user";
import {
    rejects
} from "assert";
let authService = new AuthService();
let orgService = new OrganizationService();
let userService = new UserService();
class CallbackDemo {
    constructor() {
        console.log(`*********************Executing CallBackDemo***********************`);
    }
    execute() {
        try {
            authService.login()
                .then(function (successResponse) {
                    if (successResponse.data.status === 'success') {
                        console.log('`**CallbackDemo** User Logged in successfully using callback');
                        orgService.getAllOrgnizations().then(function (organizationListResp) {
                            const organizationList = organizationListResp.data;
                            const usersMap = new Map();
                            organizationList.forEach(organization => {
                                orgService.getOrgnizationDetail(organization.id).then(organizationDetailRes => {
                                    userService.getUsers(organization.id).then(userListRes => {
                                        usersMap.set(organizationDetailRes.data, userListRes.data);
                                        console.log(`**CallbackDemo** orgnization details${JSON.stringify(organizationDetailRes.data)}`);
                                        console.log(`**CallbackDemo** For orgnizations:${organization.id}, Users:${JSON.stringify(userListRes.data)}`);
                                    })
                                });
                            });
                        }, function (errorResponse) {
                            console.log(`**CallbackDemo** orgnizationListError errorResponse: ${JSON.stringify(errorResponse)}`);
                        });
                    }
                }, this.loginError);
        } catch (error) {
            console.error(`**CallbackDemo** Error occured while executing callback: ${error.message}`);
        }

    }
}

export default CallbackDemo;