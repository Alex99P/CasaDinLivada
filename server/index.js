import express from'express';
import route from './Routes/router.js';
import connectDB from './database/connection.js'
import bodyparser from "body-parser";
import cors from "cors";
import userRouter from "./Routes/user.js";
import bookingRouter from "./Routes/booking.js";

const app =express();
const port=5000;

connectDB();
app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.json())
app.use(cors());


app.use('/',route);
app.use('/user',userRouter);
app.use('/booking',bookingRouter);
app.listen(port,()=>console.log( `Running on http://localhost:${port}`))

