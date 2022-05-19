// import express from 'express';
// const app = express();
// const port = 6000;


// app.listen(port, () => {
//   console.log(`Example app listening on port,${port}!`)
// });

// //app.use(morgan('tiny'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// //app.use(require('./routes/index.routes'))

import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {orderRouter} from "./routes/order-routes";
import {authRouter} from "./routes/auth-routes";
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/orders", orderRouter);
app.use("/signup", authRouter);

app.listen(process.env.PORT, () => {
console.log("Node server started running",`${process.env.PORT}`);
});
