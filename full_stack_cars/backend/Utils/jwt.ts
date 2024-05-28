import { UserCred } from "../Models/UserCred";

import jwt from 'jsonwebtoken';

const secretKey = "secret_key_for_my_cars_shop_city_jwt_tokens";

const createJWT = (user:UserCred)=>{
    const payload = {
        id:user.userEmail,
        name:user.userName,
        role:user.userRole
    }

    const options = {expiresIn: '1h'};

    const myJWT = jwt.sign(payload, secretKey, options);
    return "Bearer " + myJWT;
}

const checkJWT = (token:string)=>{
    try {
        const checkToken = token.split(' ')[1];
        const decoded = jwt.verify(checkToken, secretKey);
        
        return createJWT(new UserCred(decoded.name, decoded.role, decoded.id));
    } catch (err:any) {
        console.log(err);
        return "";
    }
}

export {
    createJWT,
    checkJWT
}