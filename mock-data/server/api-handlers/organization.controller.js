/**
 * Created by Ravindra Thorat on 3/12/18
 * Overview:
 */
import {ORGANIZATION_DETAILS, ORGANIZATION_LIST} from "../data.const";


let getOrganizationList = (request, result, next) => {
    setTimeout(()=>{
        result.status(200).send(ORGANIZATION_LIST);
    }, 2000);
};

let getOrganizationDetails = (request, result, next) => {
    setTimeout(()=>{
        result.status(200).send(ORGANIZATION_DETAILS.filter(( org => org.id === parseInt(request.params.id) )));
    }, 3000);
};

export {getOrganizationList, getOrganizationDetails};
