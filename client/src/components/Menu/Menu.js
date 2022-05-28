import React, { useState } from "react";
//rface
import Navbar from "../Navbar/Navbar";
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
import { makeStyles } from "@material-ui/styles";
import './Menu.scss'

const useStyles = makeStyles({
  link: {
    "&:hover": {
      color: "black",
    },
  },
});

const Menu = ({ bgBlack = false }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const classes = useStyles();

  return (
    <>
      <Navbar
        className='menu-wrapper'
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        bgBlack={bgBlack}
      />
      <Grid container direction="row" justifyContent="flex-end">
        {showMenu && (
          <Grid item>
            <Paper
              sx={{
                width: "400px",
                height: "100vh",
                opacity: "0.95",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
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
                <Typography variant="h3" color="initial">
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
                  className={classes.link}
                  href="/ritual"
                  underline="hover"
                  color="black"
                  variant="h5"
                >
                  Ritualul
                </Link>
                <Link
                  className={classes.link}
                  href="/housing"
                  underline="hover"
                  color="black"
                  variant="h5"
                >
                  Cazare
                </Link>
                <Link
                  className={classes.link}
                  href="/relaxation"
                  underline="hover"
                  color="black"
                  variant="h5"
                >
                  Relaxare
                </Link>
                <Link
                  className={classes.link}
                  href="/prices"
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
                    className={classes.link}
                    href="/frequent-questions"
                    underline="hover"
                    color="black"
                    variant="body1"
                  >
                    Intrebari frecvente{" "}
                  </Link>
                  <Link
                    className={classes.link}
                    href="/location"
                    underline="hover"
                    color="black"
                    variant="body1"
                  >
                    Cum ajung aici?
                  </Link>
                  <Link
                    className={classes.link}
                    href="/about-us"
                    underline="hover"
                    color="black"
                    variant="body1"
                  >
                    Despre noi
                  </Link>
                  <Link
                    className={classes.link}
                    href="/photos"
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
    </>
  );
};

export default Menu;