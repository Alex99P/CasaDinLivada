import express from'express';
import connectDB from './database/connection.js'
import bodyparser from "body-parser";
import cors from "cors";
import userRouter from "./Routes/user.js";
import bookingRouter from "./Routes/booking.js";
/*
import axios from "axios"
import fs from "fs"; 
import http from "http"  
import xml2js from "xml2js "
// import { parseString } from "xml2js"; 
import fetch from "node-fetch"
import convert from "xml-js"
*/
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



/*
const getConversions = async () => {
  // get data form BNR XML file
  // console.log(result);
  const result = await axios.get('https://www.bnr.ro/nbrfxrates.xml')



  http.get("http://www.bnr.ro/nbrfxrates.xml", function(res) {
    // if( itemIsReadable ){
        console.log("Got response: " + res);
    // }
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

  // .then(str => {
  //     dataAsJson = JSON.parse(convert.xml2json(str))
  // })
  // .then(() => {
  //     console.log('Station id returned from the WS is:' + 
  //         `${dataAsJson.elements[0].elements[0].elements[0].elements[0].elements[0].elements
  //             .filter(obj => { return obj.name == 'stnr'; })[0].elements[0].text} Expecting 68050 here!`
  //     );
  // });
  

//   const result = await axios.get('https://www.bnr.ro/nbrfxrates.xml',function(res) {
//     console.log(1);
    
//     let data = '';
//     res.on('data', function(stream) {
//         data += stream;
//     });
//     res.on('end', function(){
//         parseString(data, function(error, result) {
//             if(error === null) {
//                 console.log(result);
//             }
//             else {
//                 console.log(error);
//             }
//         });
//     });
// })

  
}

getConversions();






//   var xmldata = '<?xml version=”1.0" encoding=”UTF-8"?>' +
// '<Student>' +
//     '<PersonalInformation>' +
//         '<FirstName>Sravan</FirstName>' +
//         '<LastName>Kumar</LastName>' +
//         '<Gender>Male</Gender>' +
//     '</PersonalInformation>' +
//     '<PersonalInformation>' +
//         '<FirstName>Sudheer</FirstName>' +
//         '<LastName>Bandlamudi</LastName>' +
//         '<Gender>Male</Gender>' +
//     '</PersonalInformation>' +
// '</Student>';
  

// const result = await axios.get('https://www.bnr.ro/nbrfxrates.xml')
  // parseString(result, function (err, results) {
  //   // console.log(xmldata)
  //   // parsing to json
  //   let data = JSON.stringify(results,null,4)
      
  //   // display the json data
  //   console.log("results",data);
  //   });

  */