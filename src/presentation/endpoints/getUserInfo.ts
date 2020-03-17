import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"


export const getUserInfoEndpoint = async (req: Request, res: Response) => {

    try {
        const data = jwt.verify(req.headers.auth as string, "lalala") as { id: string }

        
        
        const input = {
            id: data.id
        }

      
        
        res.send({ user: data });

        } catch (err) {
            res.status(400).send({
                message: err.message,
                ...err
            });
        }
    };