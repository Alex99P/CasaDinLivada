import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  Divider,
  Paper,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Input from "../Auth/Input";
import axios from "axios";
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

const Userdashboard = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [nav, setNav] = useState("account");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const email = user?.result?.email;
  const name = user?.result?.name;
  let words = name.split(" ");
  const firstName = words[0];
  const lastName = words[1];
  const phoneNumber = user?.result?.phoneNumber;
  const id = user?.result?._id;
  const [fromDate, setfromDate] = useState([]);
  const [toDate, settoDate] = useState([]);
  const [data, setData] = useState([]);
  const [dataCiubar, setDataCiubar] = useState([]);
  const [reservationId, setReservationId] = useState();
  const [nameId, setNameId] = useState();

  const [open, setOpen] = useState(false);

  const handleClickOpen = (id, name) => {
    if (name === "cabana") {
      setReservationId(id);
      setNameId("cabana");
    } else {
      setReservationId(id);
      setNameId("ciubar");
    }
    setOpen(true);
  };
  const handleDelete = () => {
    deleteBooking(reservationId);
    setOpen(false);
  };
  const handleDeleteCiubar = () => {
    deleteBookingCiubar(reservationId);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [form, setForm] = useState({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
  });

  const deleteBooking = (id) => {
    axios
      .delete(`http://localhost:5000/booking/house/${id}`)
      .then(() => {
        setData(data.filter(({ _id }) => _id !== id));
        console.log("Delete successful");
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
        console.error("There was an error!", error);
      });
  };
  const deleteBookingCiubar = (id) => {
    axios
      .delete(`http://localhost:5000/booking/ciubar/${id}`)
      .then(() => {
        setDataCiubar(data.filter(({ _id }) => _id !== id));
        console.log("Delete successful");
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
        console.error("There was an error!", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:5000/user/edit/${id}`, {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phoneNumber: form.phoneNumber,
      })
      .then(({ data }) => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        profile.result = data;
        localStorage.setItem("profile", JSON.stringify({ ...profile }));
        setUser(profile);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function getDate() {
    try {
      const response = await axios.get(`http://localhost:5000/booking/house/${id}`);
      const responseCiubar = await axios.get(
        `http://localhost:5000/booking/ciubar/${id}`
      );

      setData(response?.data);
      setDataCiubar(responseCiubar?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDate();
  }, []);

  if (loading) {
    return (
      <Grid container spacing={2} justifyContent="center" marginTop={"50%"}>
        <CircularProgress />
      </Grid>
    );
  }

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
            {nav === "bookings" && (
              <Paper variant="outlined" className="paper" sx={{ p: 3 }}>
                <Typography variant="h3" color="initial">
                  My bookings
                </Typography>
                <TableContainer component={Paper}>
                  <Table size="medium" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell align="left">From Date</TableCell>
                        <TableCell align="left">To Date</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((reservation) => (
                        <TableRow
                          key={reservation._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {reservation.name}
                          </TableCell>
                          <TableCell align="left">
                            {reservation.bookTime.fromDate}
                          </TableCell>
                          <TableCell align="left">
                            {reservation.bookTime.toDate}
                          </TableCell>
                          <TableCell align="left">
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() =>
                                handleClickOpen(
                                  reservation._id,
                                  reservation.name
                                )
                              }
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {dataCiubar.map((reservation) => (
                        <TableRow
                          key={reservation._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {reservation.name}
                          </TableCell>
                          <TableCell align="left">
                            {reservation.bookTime.fromDateCiubar}
                          </TableCell>
                          <TableCell align="left">
                            {reservation.bookTime.toDateCiubar}
                          </TableCell>
                          <TableCell align="left">
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() =>
                                handleClickOpen(
                                  reservation._id,
                                  reservation.name
                                )
                              }
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Sunteti sigur ca doriti sa anulati rezervarea ?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Renunta</Button>
                {nameId === "cabana" ? (
                  <Button onClick={handleDelete} autoFocus>
                    Sterge rezervarea
                  </Button>
                ) : (
                  <Button onClick={handleDeleteCiubar} autoFocus>
                    Sterge rezervarea
                  </Button>
                )}
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Userdashboard;
