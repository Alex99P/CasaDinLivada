import express from'express';
import connectDB from './database/connection.js'
import bodyparser from "body-parser";
import cors from "cors";
import userRouter from "./Routes/user.js";
import bookingRouter from "./Routes/booking.js";
import axios from "axios"


const app =express();
const port=5000;

connectDB();
app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.json())
app.use(cors());


// app.use('/',route);
app.use('/user',userRouter);
app.use('/booking',bookingRouter);
app.listen(port,()=>console.log( `Running on http://localhost:${port}`))


function parseXmlToJson(xml) {

  const json = {};
  
  
  
  for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
  
  const key = res[1] || res[3];
  
  const value = res[2] && parseXmlToJson(res[2]);
  
  json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;
  
  
  }
  
  return json;
  
  }



const getConversions = async () => {

// get data form BNR XML file

const { data } = await axios.get('https://www.bnr.ro/nbrfxrates.xml')



const json = parseXmlToJson(data

// remove all spaces

.replaceAll('\r', '')

// remove all end line

.replaceAll('\n', '')

// remove all spaces

.replaceAll('\t', '')

// remap <Rate currency="CUR">value</Rate> to <CUR>value</CUR>

.replaceAll(/<(\w+) (\w+)="(\w+)">([0-9.]*)<\/(\w+)>/g, '<$3>$4</$3>'))


console.log(json.DataSet.Body.Cube.USD)

}



getConversions()
// setTimeout(() => {
//   getConversions()
// }, 24 * 1000 * 60 * 60)

