import React, { useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Input from "../Auth/Input";
import axios from "axios";
import { message } from "antd";
import "./style.css";
import NavbarRezervare from "../Navbar/NavbarRezervare";

const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root": {
      margin: "8px",
    },
  },
  form: {
    width: "80%",
    marginTop: "30px",
  },
});

const Userdashboard = () => {
  const btnStyle = {
    textTransform: "none",
    color: "black",
    // backgroundColor: "white",
    height: 45,
    border: "none",
    "&:hover": {
      backgroundColor: "#c7c9c7",
      border: "black",
    },
  };

  const classes = useStyles();

  const [nav, setNav] = useState("account");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const email = user?.result?.email;
  const name = user?.result?.name;
  let words = name.split(" ");
  const firstName = words[0];
  const lastName = words[1];
  const phoneNumber = user?.result?.phoneNumber;
  const id = user?.result?._id;
  const [form, setForm] = useState({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/user/edit/${id}`, {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phoneNumber: form.phoneNumber,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <NavbarRezervare from="userDashboard" />

      <Box className="container" sx={{ flexGrow: 1, margin: 0, marginTop: 10 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} md={4} className="list">
            <List component="nav">
              <ListItem>
                <Button
                  style={btnStyle}
                  fullWidth
                  onClick={() => {
                    setNav("account");
                  }}
                >
                  My Account
                </Button>
              </ListItem>
              <Divider />
              <ListItem divider>
                <Button
                  style={btnStyle}
                  fullWidth
                  onClick={() => {
                    setNav("bookings");
                  }}
                >
                  My Bookings
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  style={btnStyle}
                  fullWidth
                  onClick={() => {
                    setNav("email");
                  }}
                >
                  Email and Passwords
                </Button>
              </ListItem>
              <Divider light />
              <ListItem>
                <Button style={btnStyle} fullWidth>
                  LogOut
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={8}>
            {nav === "account" && (
              <Paper variant="outlined" className="paper" sx={{ p: 3 }}>
                <Typography variant="h3" color="initial">
                  My Account Information
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <>
                      <Input
                        name="firstName"
                        label="First Name"
                        handleChange={handleChange}
                        autoFocus
                        defaultValue={firstName}
                      />
                      <Input
                        name="lastName"
                        label="Last Name"
                        handleChange={handleChange}
                        defaultValue={lastName}
                      />
                      <Input
                        name="phoneNumber"
                        label="Phone Number"
                        handleChange={handleChange}
                        defaultValue={phoneNumber}
                      />
                    </>

                    <Input
                      name="email"
                      label="Email Address"
                      handleChange={handleChange}
                      type="email"
                      defaultValue={email}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    sx={{ margin: "24px 0 16px 0px" }}
                  >
                    Salveaza
                  </Button>
                </form>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Userdashboard;
