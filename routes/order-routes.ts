import express, {Request, Response} from "express";
import * as orderModel from "../models/order";
//import {Order} from "../types/order";

const orderRouter = express.Router();

orderRouter.get("/getdata", async (req: Request, res: Response) => {
 
  
  orderModel.findAll((err: Error, orders: any) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": orders});
  });
});

orderRouter.post("/add", async (req: Request, res: Response) => {
  const newOrder: any = req.body;
  orderModel.create(newOrder, (err: Error, orderId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"orderId": orderId});
  });
});

orderRouter.get("/:id", async (req: Request, res: Response) => {
  const orderId: number = Number(req.params.id);
  orderModel.findOne(orderId, (err: Error, order: any) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": order});
  })
});

orderRouter.put("/:id", async (req: Request, res: Response) => {
  const orderId: number = Number(req.params.id);
  const order: any = req.body;
  orderModel.update(order, orderId,(err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).send();
  })
});

orderRouter.delete("/:id", async (req: Request, res: Response) => {
  const orderId: number = Number(req.params.id);
  orderModel.deleteOne(orderId, (err: Error, order: any) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
  
    if(order.affectedRows!=0)
    res.status(200).json({"data": 'Data deleted successfully'});
    else
    res.status(200).json({"data": 'Id not found'});
  })
});

export {orderRouter};