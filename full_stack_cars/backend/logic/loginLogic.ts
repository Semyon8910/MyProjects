import * as fs from "fs";
import { UserCred } from "../Models/UserCred";

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

const forgotPassword = (userName:string) => {
    let userInfo;
    try {
        userInfo = JSON.parse(fs.readFileSync("../assets/users.data", "utf-8"));
    } catch (err){
        userInfo = [];
    }
    let singleUser = userInfo.find((item: {userName:string})=>{item.userName === userName})
    if (singleUser===undefined){
        console.log('user not found')
        return false;
    }

    return singleUser.userPass
}

export {
    registerUser
}


