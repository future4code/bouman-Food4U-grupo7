import { Request, Response } from 'express';
import { UserDB } from "../../data/userDatabase";
import * as jwt from 'jsonwebtoken';
import { GetUserInfoUC } from '../../business/usecases/getUserInfo';

export const getUserInfoEndpoint = async (req: Request, res: Response) => {
   try{
      const loginUC = new GetUserInfoUC(new UserDB());

      const data = jwt.verify(req.headers.auth as string, "saulo-bouman") as {id: string}

      const userInfo = await loginUC.execute({
        id: data.id
      })

      res.status(200).send({user: userInfo})

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })  
   };
}