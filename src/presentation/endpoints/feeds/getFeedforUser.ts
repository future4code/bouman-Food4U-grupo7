import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { GetFeedUserUC } from "../../../business/usecases/feeds/getFeedforUser";
import { FeedDB } from "../../../data/feedDatabase";

export const getFeedforUserEndpoint = async (req: Request, res: Response) => {
   try {
      const getFeedforUserUC = new GetFeedUserUC(new FeedDB());

      const data = jwt.verify(req.headers.authorization as string, "saulo-bouman") as { id: string }

      const result = await getFeedforUserUC.execute({
         userId: data.id
      });

      res.status(200).send({ feeds: result });
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};