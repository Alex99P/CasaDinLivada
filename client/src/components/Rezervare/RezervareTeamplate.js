import React, { useState, useEffect } from "react";
import {
  Stack,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Popup from "../controls/Popup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "antd/dist/antd.min.css";
import { bookingHouse } from "../../redux/actions/booking.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const RezervareTeamplate = ({
  title,
  body,
  textBtn,
  checkBox,
  mTop,
  setnumberNights,
  setfromMonth,
  settoMonth,
  setfromDay,
  settoDay,
}) => {

  const btnStyle = {
    marginTop: "20px",
    padding: "10px",
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "black",
    },
  };
  let margin;
  if (mTop) {
    margin = {
      marginTop: "96px",
    };
  } else {
    margin = {
      marginTop: "0px",
    };
  }
  // variables for room
  const [showRoom, setShowRoom] = useState(false);
  const handleRoomOpen = () => {
    setShowRoom(true);
  };
  const handleRoomClose = () => {
    setShowRoom(false);
  };
  const [checked, setChecked] = useState(false);

  // variables for date
  const { RangePicker } = DatePicker;
  //whole date
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const dispatch = useDispatch();
  const dateFormat = "DD-MM-YYYY";
  const disabledDates = [];
  let amount=10;

  function Dates(date) {
    // Trebuie sa fac sa apara disable toate zilele selectate
    // var today = moment();
    // var tomorrow = moment(today).add(-1, 'days');


    if (date !== null) {
      const fromdate = moment(date[0]).add(-1, "days");
      setfromDate(moment(date[0]).format("DD-MM-YYYY"));
      setfromMonth(moment(date[0]).format("MMMM"));
      setfromDay(moment(date[0]).format("DD"));

      const todate = moment(date[1]).add(1, "days");
      settoDate(moment(date[1]).format("DD-MM-YYYY"));
      settoMonth(moment(date[1]).format("MMMM"));
      settoDay(moment(date[1]).format("DD"));

      setnumberNights(moment.duration(todate.diff(fromdate)).asDays());
    }
  }

  function onToken(token) {
    console.log(token);
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("profile")).result._id,
      // cabana sau ciubar trebuie sa le fac un id
      bookTime: {
        fromDate,
        toDate,
      },
      amount
    };

    dispatch(bookingHouse(reqObj));
  }

  async function getAllBookings() {
    const response = await axios.get("http://localhost:5000/booking/bookings");
    console.log(response?.data.length);

    for (let i = 0; i < response?.data.length; i++) {
      const from = response?.data[i]?.bookTime?.fromDate;
      const to = response?.data[i]?.bookTime?.toDate;
      console.log(from, " - ", to);
      disabledDates.push({
        start: moment(from, dateFormat),
        end: moment(to, dateFormat),
      });
    }
  }
  useEffect(() => {
    getAllBookings();
  }, []);

  // function disabledDate(current) {
  //   // Can not select days before today and today
  //   console.log("Se apeleaza");
  //   return current && current < moment().endOf('day');
  // }
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        style={margin}
      >
        <Grid
          marginBottom={4}
          item
          ml={3}
          mr={5}
          sx={{ border: "1px solid black" }}
        >
          <Grid container direction="row" alignItems="center" p={2}>
            <Grid item md={2} mr={10}>
              <Stack height="200px" bgcolor="#9e9e9e" width="240px"></Stack>
            </Grid>
            <Grid item ml={7} md={7}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2">{body}</Typography>
              <Button
                variant="outlined"
                style={btnStyle}
                onClick={handleRoomOpen}
              >
                {textBtn}
              </Button>
            </Grid>
            {/* sx={{ border: "1px solid black", borderBottom: "none" }} */}
            <Grid item xs={12} mt={2} p={1}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {checkBox ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                    }
                    label="Cu mic dejun"
                  />
                ) : (
                  <Stack></Stack>
                )}

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon size="large" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p style={{ fontSize: "1.25rem" }}>Rezervati perioada</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Space direction="vertical">
                      <RangePicker
                        format="DD-MM-YYYY"
                        onChange={Dates}
                        // disabledDate={disabledDate}
                        disabledDate={(current) =>
                          disabledDates.some((date) =>
                            current.isBetween(
                              moment(date["start"], dateFormat),
                              moment(date["end"], dateFormat),
                              "day"
                            )
                          )
                        }
                      />
                    </Space>
                    <StripeCheckout
                      token={onToken}
                      currency="RON"
                      amount={amount * 100}
                      stripeKey="pk_test_51KytTpLuy8CHjVd0G4MYwWK4W02WJuBq8vTR3xijRHkt0Z8nDjpvcWjXXCgftskcgUyWOuJWAe9VgoHvZ9xaUlVW00m9vpL7V9"
                    >
                      <Button
                        variant="text"
                      >
                        Book now
                      </Button>
                    </StripeCheckout>
                  </AccordionDetails>
                </Accordion>
                {/* </Stack> */}
              </Grid>
            </Grid>
            <Grid item>
              <Stack>
                <Popup
                  openPopup={showRoom}
                  setOpenPopup={handleRoomClose}
                  title={title}
                  // va mai trebui si alte props
                ></Popup>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RezervareTeamplate;