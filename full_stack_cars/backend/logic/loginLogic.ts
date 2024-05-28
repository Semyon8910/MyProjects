import { UserCred } from "../Models/UserCred";
import fs from "fs";
import { createJWT } from "../Utils/jwt";

const registerUser = (user:UserCred) => {
    let userInfo;
    try {
        userInfo = JSON.parse(fs.readFileSync("../assets/users.data", "utf-8"));
    } catch (err){
        userInfo = [];
    }

    let singleUser = userInfo.find((item: {userName:string})=>{item.userName === user.userName})
    if (singleUser!==undefined){
        console.log(`${singleUser} is already exist`)
        return false;
    }
    userInfo.push(user);
    fs.writeFileSync("..assets/user.data",JSON.stringify(userInfo));
    return true;
}

const loginUser = (user:UserCred) => {
    let userInfo;
    try {
        userInfo = JSON.parse(fs.readFileSync("../assets/users.data", "utf-8"));
    } catch (err){
        userInfo = [];
    }

    let singleUser = userInfo.find((item: {userName:string}) => item.userName === user.userName);

    if (
        singleUser.userName === user.userName &&
        singleUser.userPass === user.userPass
        ) {
            return createJWT(singleUser);
        } else {
            return "";
        }
}


export {
    registerUser
}


