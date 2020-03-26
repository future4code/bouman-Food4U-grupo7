import { Request, Response } from "express";
import { UserDB } from "../../../data/userDatabase";
import { UpdateUserPasswordUC } from '../../../business/usecases/users/updateUserPassword';
import * as jwt from "jsonwebtoken";



export const UpdateUserPasswordEndpoint = async (req: Request, res: Response) => {
    try {
        const updateUserPasswordUC = new UpdateUserPasswordUC(new UserDB);
        const jwtSecretKey: string = process.env.SECRET || "";
        const token_verify = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }
        const input = {
            previousPassword: req.body.previousPassword,
            newPassword: req.body.newPassword,
            id: token_verify.id
        };
        
        const result = await updateUserPasswordUC.execute(input);
        res.status(200).send(result);
    }catch (err){
        res.status(400).send({
            message: err.message
        });
    }
}
