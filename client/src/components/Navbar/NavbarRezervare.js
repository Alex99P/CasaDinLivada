import React, { useState, useEffect } from "react";
import {
  Toolbar,
  IconButton,
  MenuItem,
  TextField,
  Button,
  AppBar,
  Stack,
  Box,
  Typography,
  Divider,
  InputAdornment,
  Link,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@material-ui/styles";

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

const NavbarRezervare = () => {
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
  console.log(user);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/rezervare");
    setUser(null);
  };

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mr={3}
            >
              <Typography variant="body1">Buna, {user?.result?.givenName}!</Typography>
            </Stack>
          ) : null}

          <Stack
            direction="row"
            // spacing={0.5}
            divider={<Divider orientation="vertical" color="white" flexItem />}
          >
            {user ? (
              <Button
                style={btnStyle}
                variant="text"
                size="small"
                sx={{ mr: 2 }}
                onClick={logout}
              >
                LogOut
              </Button>
            ) : (
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
            )}

            <TextField
              className={classes.textField}
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChangeCurrency}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <KeyboardArrowDownIcon
                      sx={{ color: "white", margin: 0, cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: "#fff" },
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className={classes.textField}
              id="outlined-select-language"
              select
              value={language}
              onChange={handleChangeLanguage}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <KeyboardArrowDownIcon
                      sx={{ color: "white", margin: 0, cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: "#fff" },
              }}
            >
              {languages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarRezervare;
