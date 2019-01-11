import AuthService from "../services/auth";
import OrganizationService from "../services/orgnization";
import UserService from "../services/user";
import {
    rejects
} from "assert";
import {
    resolve
} from "url";
let authService = new AuthService();
let orgService = new OrganizationService();
let userService = new UserService();
class AsyncAwaitDemo {
    constructor() {
        console.log(`*********************Executing AsyncAwaitDemo***********************`);
    }
    async execute() {
        try {
            const loginResponse = await authService.login();
            if (loginResponse.data.status === 'success') {
                console.log('**AsyncAwaitDemo** User Logged in successfully using Async Await');
                const organizationListResp = await orgService.getAllOrgnizations();
                const usersMap = new Map();
                await organizationListResp.data.forEach(async function(organization) {
                        const orgnizationDetailResp = await orgService.getOrgnizationDetail(organization.id);
                        console.log(`**AsyncAwaitDemo** orgnization details${JSON.stringify(orgnizationDetailResp.data)}`);
                        const userListResp = await userService.getUsers(organization.id)
                        console.log(`**AsyncAwaitDemo** For orgnizations:${organization.id}, Users:${JSON.stringify(userListResp.data)}`);
                        usersMap.set(orgnizationDetailResp.data, userListResp.data);
                        console.log(`**AsyncAwaitDemo** After looping for orgnization:${organization.id}, usersMap Size:${usersMap.size}`);
                        // usersMap.forEach(function(value, key) {
                        //     console.log(`Key => ${JSON.stringify(key)}, value =>${JSON.stringify(value)}`);
                        // });
                });
            }
        } catch (error) {
            console.error(`**AsyncAwaitDemo** Error occured while executing asyncawait: ${error.message}`);
        }
    }

    failureCallback(errorResponse) {
        console.log(`**AsyncAwaitDemo** errorResponse: ${JSON.stringify(errorResponse)}`);
    }
}

export default AsyncAwaitDemo;