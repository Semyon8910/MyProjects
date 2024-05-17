import express, { Request,Response,NextFunction } from "express";
import { addCar } from "../logic/carLogic";
import { register } from "module";
import { registerUser } from "../logic/loginLogic";


const carRouter = express.Router();
const loginRouter = express.Router();

carRouter.get(
    '/addCar/:id', 
    async (req:Request, res:Response, nextFunction: NextFunction) => {
        res.status(200).json(await addCar(req.params.id, 0, 1, 0));
    }
);

loginRouter.post(
    '/loginUser',
    async (req:Request, res:Response, nextFunction:NextFunction) => {
        let userCred = req.body;
        res.status(200).json({msg:`hello user ${userCred.userName}`})
    }
)

loginRouter.post(
    '/registerUser',
    async (req:Request, res:Response, nextFunction:NextFunction) => {
        if (registerUser(req.body)) {
            res.status(200).json({ msg: `user was created`});
        } else {
            res.status(400).json({msg: "user already exists"});
        }
    }
);

loginRouter.post(
    '/forgotPassword',
    async (req:Request, res:Response, nextFunction:NextFunction) => {
            
    }
)

export 
{
    carRouter
}
