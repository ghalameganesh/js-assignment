/**
 * Created by Ravindra Thorat on 3/12/18
 * Overview:
 */
import {USERS} from "../data.const";

let getUsers = (request, result, next) => {
    let ms = 0;
    switch (request.params.id) {
        case "1":
            ms = 3000;
            break;
        case "2":
            ms = 2000;
            break;
        case "3":
            ms = 4000;
            break;
        default:
            ms = 2000;
            break;
    }
    setTimeout(()=>{
        result.status(200).send(USERS[request.params.id]);
    }, ms);
};

export default getUsers;