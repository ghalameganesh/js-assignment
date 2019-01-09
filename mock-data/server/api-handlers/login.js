/**
 * Created by Ravindra Thorat on 3/12/18
 * Overview:
 */

let login = (request, result, next) => {
    setTimeout(()=>{
        result.status(200).send({status: 'success'});
    }, 3000);
};

export default login;