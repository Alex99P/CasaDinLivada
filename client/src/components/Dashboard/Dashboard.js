import { makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "../Auth/Input";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import "./style.css";

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

const Dashboard = () => {
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
  const [data, setData] = useState([]);
  const [dataCiubar, setDataCiubar] = useState([]);
  const [reservationId, setReservationId] = useState();
  const [nameId, setNameId] = useState();
  const [isAdmin, setIsAdmin] = useState(user?.result?.admin);
  const [posts, setPosts] = useState([]);

  let from = "userDashboard";

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
      let response;
      let responseCiubar;
      if (isAdmin) {
        response = await axios.get(`http://localhost:5000/booking/house`);
        responseCiubar = await axios.get(
          `http://localhost:5000/booking/ciubar`
        );
      } else {
        response = await axios.get(`http://localhost:5000/booking/house/${id}`);
        responseCiubar = await axios.get(
          `http://localhost:5000/booking/ciubar/${id}`
        );
      }

      setData(
        [
          ...response?.data.map((cabana) => ({
            ...cabana,
            bookTime: {
              fromDate: cabana.bookTime.fromDate.split("-").reverse().join("-"),
              toDate: cabana.bookTime.toDate.split("-").reverse().join("-"),
            },
          })),
        ].sort((a, b) =>
          new Date(a.bookTime.fromDate) > new Date(b.bookTime.fromDate) ? 1 : -1
        )
      );

      setDataCiubar([
        ...responseCiubar?.data.map((ciubar) => ({
          ...ciubar,
          bookTime: {
            fromDate: ciubar.bookTime.fromDateCiubar,
            toDate: ciubar.bookTime.toDateCiubar,
          },
        })),
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/feedback");

      setPosts(res.data);
      let sum = 0;
      res.data.map((rate) => {
        sum = sum + rate.rating;
      });

      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  if (loading) {
    return (
      <Grid container spacing={2} justifyContent="center" marginTop={4}>
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <>
      <NavbarRezervare from={from} />
      <Box className="container" sx={{ flexGrow: 1, margin: 0, marginTop: 10 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          height="100%"
          sx={{ marginBottom: 10 }}
        >
          <Grid item xs={12} md={2} className="list">
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
                  {isAdmin ? "All bookings Cabana" : "My bookings Cabana"}
                </Button>
              </ListItem>
              <Divider light />
              <ListItem>
                <Button
                  style={btnStyle}
                  fullWidth
                  component={Link}
                  onClick={() => {
                    setNav("bookingsCiubar");
                  }}
                >
                  {isAdmin ? "All bookings Ciubar" : "My bookings Ciubar"}
                </Button>
              </ListItem>

              {isAdmin && (
                <>
                  <Divider light />
                  <ListItem>
                    <Button
                      style={btnStyle}
                      fullWidth
                      component={Link}
                      onClick={() => {
                        setNav("feedback");
                      }}
                    >
                      All feedbacks
                    </Button>
                  </ListItem>
                </>
              )}
            </List>
          </Grid>
          <Grid item xs={12} md={10}>
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
              <Paper
                variant="outlined"
                className="paper"
                sx={{ p: 3, maxHeight: "100vh" }}
              >
                <Typography variant="h3" color="initial">
                  {isAdmin ? "All bookings Cabana" : "My bookings Cabana"}
                </Typography>
                <TableContainer
                  component={Paper}
                  mb={5}
                  sx={{ maxHeight: "70vh" }}
                >
                  <Table size="medium" aria-label="a dense table" height="100%">
                    <TableHead>
                      <TableRow>
                        {isAdmin && (
                          <>
                            <TableCell align="left">Name </TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                          </>
                        )}
                        <TableCell align="left">With Ciubar</TableCell>
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
                          {isAdmin && (
                            <>
                              <TableCell align="left">
                                {reservation.user?.name}
                              </TableCell>
                              <TableCell align="left">
                                {reservation.user?.email}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {reservation.user?.phoneNumber}
                              </TableCell>
                            </>
                          )}
                          <TableCell component="th" scope="row">
                            {reservation?.withCiubar ? "Da" : "Nu"}
                          </TableCell>
                          <TableCell align="left">
                            {reservation?.bookTime?.fromDate}
                          </TableCell>
                          <TableCell align="left">
                            {reservation?.bookTime?.toDate}
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

            {nav === "bookingsCiubar" && (
              <Paper
                variant="outlined"
                className="paper"
                sx={{ p: 3, maxHeight: "100vh" }}
              >
                <Typography variant="h3" color="initial">
                  {isAdmin ? "All bookings" : "My bookings"}
                </Typography>
                <TableContainer
                  component={Paper}
                  mb={5}
                  sx={{ maxHeight: "70vh" }}
                >
                  <Table size="medium" aria-label="a dense table" height="100%">
                    <TableHead>
                      <TableRow>
                        {isAdmin && (
                          <>
                            <TableCell align="left">Name </TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                          </>
                        )}
                        <TableCell align="left">From Date</TableCell>
                        <TableCell align="left">To Date</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dataCiubar.map((reservation) => (
                        <TableRow
                          key={reservation._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {isAdmin && (
                            <>
                              <TableCell align="left">
                                {reservation.user?.name}
                              </TableCell>
                              <TableCell align="left">
                                {reservation.user?.email}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {reservation.user?.phoneNumber}
                              </TableCell>
                            </>
                          )}
                          <TableCell align="left">
                            <Stack direction="column">
                              <Typography variant="body2" color="initial">
                                {" "}
                                {(reservation?.bookTime?.fromDate).substring(0, (reservation?.bookTime?.fromDate).length - 2)}
                              </Typography>

                              <Typography variant="body2" color="initial">
                                Ora{" "}
                                {(reservation?.bookTime?.fromDate).slice(-2)}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">
                            <Stack direction="column">
                              <Typography variant="body2" color="initial">
                                {" "}
                                {(reservation?.bookTime?.toDate).substring(0, (reservation?.bookTime?.toDate).length - 2)}
                              </Typography>

                              <Typography variant="body2" color="initial">
                                Ora {(reservation?.bookTime?.toDate).slice(-2)}
                              </Typography>
                            </Stack>
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

            {nav === "feedback" && (
              <Paper
                variant="outlined"
                className="paper"
                sx={{ p: 3, maxHeight: "100vh" }}
              >
                <Typography variant="h3" color="initial">
                  All feedbacks
                </Typography>
                <TableContainer
                  component={Paper}
                  mb={5}
                  sx={{ maxHeight: "70vh" }}
                >
                  <Table size="small" aria-label="a dense table" height="100%">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Name </TableCell>
                        <TableCell align="left">Feedback</TableCell>
                        <TableCell align="left">Rating</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow
                          key={post._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                         
                              <TableCell align="left">
                                {post?.name}
                              </TableCell>
                              <TableCell align="left">
                                {post?.feedback}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {post?.rating}
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

export default Dashboard;
