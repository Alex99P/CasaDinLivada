import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../imagini/imaginea1.jpg";
import Menu from "../Menu/Menu";
import "./Home.scss";



const Home = () => {

  return (
    <Box className="containerHome" style={{ backgroundImage: `
    linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0)),
    url(${img})
    `}}>
      <Box className="description">
        <Box
          height="5rem"
          width="5rem"
          bgcolor="white"
          borderRadius={50}
          marginBottom={'1rem'}
        ></Box>
        <Typography variant="h2">Casa din livada</Typography>
        <Typography variant="body1">Reînvieți simțurile la firul ierbii</Typography>
      </Box>
      <Stack className="menuWraper">
        <Menu />
      </Stack>
    </Box >
  );
};
export default Home;
