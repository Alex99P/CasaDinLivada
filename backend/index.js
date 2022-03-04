import express from'express';
import route from './Routes/router.js';
import connectDB from './database/connection.js'
import bodyparser from "body-parser";
const app =express();
const port=3000;


connectDB();
app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.json())


app.use('/',route);
app.listen(port,()=>console.log( `Running on http://localhost:${port}`))

