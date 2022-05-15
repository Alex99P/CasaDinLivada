import React from "react";
import {
  Box,
  Grid,

} from "@mui/material";

const Userdashboard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4} sx={{backgroundColor: "black"}}>
            <div >xs=6 md=8</div>
          </Grid>
          <Grid item xs={6} md={8} sx={{backgroundColor: "red"}}>
            <div>xs=6 md=4</div>
          </Grid>
        
        </Grid>
      </Box>
    </>
  );
};

export default Userdashboard;
