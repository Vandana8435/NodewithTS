import express, {Request, Response} from "express";
import * as authModel from "../models/auth";

const authRouter = express.Router();

authRouter.post("/", async (req: Request, res: Response) => {
  const newUser: any = req.body;
  authModel.create(newUser, (err: Error, userId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"userId": userId});
  });
});


  export {authRouter}