import React from "react";
import {  Typography} from "@mui/material";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <Typography sx={{textAlign:"center", justifyContent:"center", backgroundColor:"red", color:"white", borderRadius:1,  }} p={0.7} mb={1.5}  >{errorMessage}</Typography>
  );
};

export default ErrorMessage;
