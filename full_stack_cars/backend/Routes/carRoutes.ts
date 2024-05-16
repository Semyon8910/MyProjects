import express, { Request,Response,NextFunction } from "express";
import { carInfo } from "../../../node.js/cars_express_typescript/logic/TransportLogic";

const carRouter = express.Router();

carRouter.get(
    '/addCar/:carNumber', 
    async (req:Request, res:Response, nextFunction: NextFunction) => {
        res.status(200).json(await carInfo(req.params.carNumber));
    }
);

export default carRouter;
