import { Request, Response } from 'express';
import { UserDB } from "../../../data/userDatabase";
import { SignUpUC } from '../../../business/usecases/users/signUp';

export const signUpEndpoint = async (req: Request, res: Response) => {
   try {
      const signUpUC = new SignUpUC(new UserDB());
      const result = await signUpUC.execute({
         email: req.body.email,
         password: req.body.password,
         name: req.body.name,
         birthDay: req.body.birthDay
      })

      res.status(200).send(result)
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};
