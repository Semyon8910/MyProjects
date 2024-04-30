import express, {Request, Response, NextFunction, request } from "express";
import { shamaiInfo } from "../logic/boomLogic";

const boomRouter = express.Router();

boomRouter.get(
    "/shamai/:id",
    async (request: Request, response: Response, nextFunction: NextFunction) => {
        response.status(200).json(await shamaiInfo(request.params.id));
    }
)

export default boomRouter;