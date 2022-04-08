import React from "react";
import img from "../../imagini/imaginea1.jpg";
import Menu from "../Menu";
import { Box, Grid, Stack } from "@mui/material";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Box className="containerHome">
        <img className="imgHome" src={img} />
        <Stack className="menuWraper">
          <Menu />
        </Stack>
      </Box>
    </>
  );
};
export default Home;
