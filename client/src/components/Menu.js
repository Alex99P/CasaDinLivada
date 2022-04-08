import React, { useState } from "react";
//rface
import Navbar from "./Navbar/Navbar";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  Paper,
  Grid,
  Link,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import { FaAirbnb } from "react-icons/fa";

export const ThemeContext = React.createContext();

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <ThemeContext.Provider value={{ showMenu, setShowMenu }}>
        {/* <Typography variant="h1" color="white">Casa din Livada</Typography> */}

        <Navbar />
        <Grid container direction="row" justifyContent="flex-end">
          {showMenu && (
            <Grid item>
              <Paper
                sx={{
                  width: "400px",
                  height: "100vh",
                  opacity: "0.9",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                elevation={0}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={0.7}
                >
              
                  <IconButton
                    aria-label="app"
                    size="medium"
                    sx={{ color: "black", size: "200px", marginLeft: "320px" }}
                    onClick={handleMenu}
                  >
                    <CloseIcon fontSize="large" />
                  </IconButton>
                  <Box
                    height="30px"
                    width="30px"
                    bgcolor="rgb(33, 46, 36)"
                    borderRadius={50}
                  ></Box>
                  <Typography
                    variant="h3"
                    color="initial"
                  >
                    Casa din Livada
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={0.7}
                  // mt={-40}
                >
                  <Link
                    href="/ritualul"
                    underline="hover"
                    color="black"
                    variant="h5"
                  >
                    Ritualul
                  </Link>
                  <Link
                    href="/cazare"
                    underline="hover"
                    color="black"
                    variant="h5"
                  >
                    Cazare
                  </Link>
                  <Link
                    href="/relaxare"
                    underline="hover"
                    color="black"
                    variant="h5"
                  >
                    Relaxare
                  </Link>
                  <Link
                    href="/tarife"
                    underline="hover"
                    color="black"
                    variant="h5"
                  >
                    Tarife
                  </Link>
                  <Stack
                    mt={3}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Link
                      href="/intrebari-frecvente"
                      underline="hover"
                      color="black"
                      variant="body1"
                    >
                      Intrebari frecvente{" "}
                    </Link>
                    <Link
                      href="/locatie"
                      underline="hover"
                      color="black"
                      variant="body1"
                    >
                      Cum ajung aici?
                    </Link>
                    <Link
                      href="/despre-noi"
                      underline="hover"
                      color="black"
                      variant="body1"
                    >
                      Despre noi
                    </Link>
                    <Link
                      href="/galerie-foto"
                      underline="hover"
                      color="black"
                      variant="body1"
                    >
                      Galerie foto
                    </Link>
                  </Stack>
                </Stack>
                <Stack
                  // mt={30}
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  <IconButton sx={{ color: "black" }}>
                    <FacebookIcon />
                  </IconButton>

                  <IconButton sx={{ color: "black" }}>
                    <InstagramIcon />
                  </IconButton>

                  <IconButton sx={{ color: "black" }}>
                    <MailIcon />
                  </IconButton>

                  <IconButton sx={{ color: "black" }}>
                    <FaAirbnb fontSize={22} />
                  </IconButton>
                </Stack>
                {/* </Paper> */}
              </Paper>
            </Grid>
          )}
        </Grid>
      </ThemeContext.Provider>
    </>
  );
};

export default Menu;
