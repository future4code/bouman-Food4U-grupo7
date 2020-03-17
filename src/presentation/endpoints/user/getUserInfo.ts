import { Request, Response} from "express";
import * as jwt from "jsonwebtoken";
import { GetUserInfoUC } from "../../../business/usecases/getUserInfo";
import { UserDB } from "../../../data/userDatabase";

export const getUserInfoEndpoint = async (req: Request, res: Response) => {
    try{
        const getUserInfoUc = new GetUserInfoUC(new UserDB());

        const token_verify = jwt.verify(req.headers.authorization as string, "saulo-bouman") as {id: string}
        
        const result = await getUserInfoUc.execute({
            id: token_verify.id
        });
        
        res.status(200).send({user: result});
    } catch (err){
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
}