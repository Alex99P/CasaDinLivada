import * as React from "react";
import { Box } from "@mui/material";
import img from "../../imagini/work.jpg";
const Relaxare = () => {
 
  return (
    <div className='divContainer'>
    <Box className="containerCazare" style={{ backgroundImage: `
       linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0)),
       url(${img})
       `}}></Box>
       </div>
  );
};

export default Relaxare;
