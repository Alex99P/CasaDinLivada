import React from "react";
import { Box } from "@mui/material";
import img from "../../imagini/work.jpg";

const Foto = () => {
  return (
    <Box
      className="containerCazare"
      style={{
        backgroundImage: `
    linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0)),
    url(${img})
    `,
      }}
    ></Box>
  );
};

export default Foto;
