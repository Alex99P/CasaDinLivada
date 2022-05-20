import React, { useState, useEffect, useRef } from "react";
import {
  Toolbar,
  MenuItem,
  Button,
  AppBar,
  Stack,
  Box,
  Typography,
  Divider,
  Link,
  Select,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  textField: {
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "none",
      },
      "&:hover fieldset": {
        borderColor: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
  btn: {
    color: "black",
    backgroundColor: "white",
    border: "none",
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "none",
    },
  },
  link: {
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

const currencies = [
  {
    value: "RON",
    label: "RON",
  },
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "EUR",
    label: "EURO",
  },
  {
    value: "BTC",
    label: "฿",
  },
];
const languages = [
  {
    value: "Romana",
    label: "RO",
  },
  {
    value: "Engleza",
    label: "EN",
  },
];

const NavbarRezervare = (from) => {
  const classes = useStyles();
  const btnStyle = {
    color: "white",
    border: "none",
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "none",
    },
  };
  const [currency, setCurrency] = useState("RON");
  const [language, setLanguage] = useState("Romana");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isAdmin, setIsAdmin] = useState(user?.result?.admin);

  // console.log(isAdmin);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/rezervare");
    setUser(null);
  };
  const myprofile = () => {
    if (from.from === "userDashboard") {
      navigate("/rezervare");
    } else {
      navigate("/myprofile");
    }
  };

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
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

  // Dropdown menu

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <AppBar sx={{ backgroundColor: "black", boxShadow: 0 }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.2}
              >
                <Link
                  // className={classes.link}
                  href="/"
                  // underline="hover"
                  underline="none"
                  color="black"
                  variant="h5"
                >
                  <Typography variant="h6" color="white" mr={2}>
                    Casa Din Livada
                  </Typography>
                </Link>

                <StarIcon fontSize={"small"} />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </Stack>
              <Typography fontSize={11} color="white" mr={2}>
                Sistemul oficial de rezervare
              </Typography>
            </Stack>
          </Box>
          {user ? (
            <div>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ color: "white" }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {user?.result?.name}
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          {from.from === "userDashboard" ? (
                            <MenuItem onClick={myprofile}>Rezervare</MenuItem>
                          ) : (
                            <MenuItem onClick={myprofile}>My profile</MenuItem>
                          )}
                          <MenuItem onClick={myprofile}>Dashboard</MenuItem>
                          <MenuItem onClick={logout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          ) : null}

          <Stack
            direction="row"
            // spacing={0.5}
            marginRight={-3.5}
            divider={<Divider orientation="vertical" color="white" flexItem />}
          >
            {!user ? (
              <Button
                style={btnStyle}
                variant="text"
                size="small"
                sx={{ mr: 2 }}
                component={Link}
                href="/auth"
              >
                SignIn
              </Button>
            ) : null}
            <Select
              variant="outlined"
              sx={{
                marginRight: 2,
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "white",
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              }}
              value={currency}
              onChange={handleChangeCurrency}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>

            <Select
              variant="outlined"
              sx={{
                marginRight: 1,
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              }}
              value={language}
              onChange={handleChangeLanguage}
            >
              {languages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarRezervare;
