import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar, Box, Divider, IconButton, Stack, Toolbar, useMediaQuery, useTheme
} from "@mui/material";
import decode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Currencies from "./Currencies";
import Languages from "./Languages";
import Logo from "./Logo";
import User from "./User";

const NavbarRezervare = (from) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isAdmin, setIsAdmin] = useState(user?.result?.admin);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/rezervare");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // const authData = useSelector((state) => state.auth.authData);
  // console.log(authData?.message);


  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <AppBar sx={{ backgroundColor: "black", boxShadow: 0 }}>
        <Toolbar>
          <Box display="flex" flexGrow={1} >
            <Logo />
          </Box>
          {isMobile ?
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            :
            <>
              <User from={from} />
              <Stack
                direction="row"
                marginRight={-3.5}
                divider={<Divider orientation="vertical" color="white" flexItem />}
              >
                <Currencies />
                <Languages />
              </Stack>
            </>}
        </Toolbar>
        {isMenuOpen && <Box display="flex" flexDirection='column' alignItems='end' paddingRight={2} sx={{borderTop: '1px solid gray'}}  >
          <div  className="navbar">
          <User from={from}  />
          <Currencies />
          <Languages />
          </div>
        </Box>}
      </AppBar>
    </>
  );
};

export default NavbarRezervare;
