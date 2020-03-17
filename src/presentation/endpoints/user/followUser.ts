import { Request, Response} from "express";
import * as jwt from "jsonwebtoken";
import { UserDB } from "../../../data/userDatabase";
import { FollowUserUC } from "../../../business/usecases/followUser";

export const followUserEndpoint = async (req: Request, res: Response) => {
    try{
        const folowUserUC = new FollowUserUC(new UserDB());

        const data = jwt.verify(req.headers.authorization as string, "saulo-bouman") as {id: string}
        
        console.log("Teste", req.body)
        await folowUserUC.execute({
            userId: data.id,
            userToFollowId: req.body.userToFollowId

        });
        
        res.status(200).send({massege:"Usuario seguido com sucesso"});
    } catch (err){
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
}