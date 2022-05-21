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
import axios from "axios";

const RezervareTeamplate = ({
  name,
  title,
  body,
  textBtn,
  checkBox,
  mTop,
  setnumberNights,
  setnumberHours,
  setfromMonth,
  settoMonth,
  setfromDay,
  settoDay,
  setfromDate,
  settoDate,
  setid,
  setfromDateCiubar,
  settoDateCiubar,
  withCiubar,
  setwithCiubar

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
  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";
  const disabledHours = [];
  const [disabledDates, setDisabledDates] = useState([]);

  const handleRoomOpen = () => {
    setShowRoom(true);
  };
  const handleRoomClose = () => {
    setShowRoom(false);
  };
  function Dates(date) {
    console.log(moment(date[0]).format("DD-MM-YYYY"));

    // Trebuie sa fac sa apara disable toate zilele selectate
    // var today = moment();
    // var tomorrow = moment(today).add(-1, 'days');

    if (date !== null) {
      const a=moment(date[0]);

      setfromDate(moment(date[0]).format("DD-MM-YYYY"));
      setfromMonth(moment(date[0]).format("MMMM"));
      setfromDay(moment(date[0]).format("DD"));

      const b=moment(date[1]);
      settoDate(moment(date[1]).format("DD-MM-YYYY"));
      settoMonth(moment(date[1]).format("MMMM"));
      settoDay(moment(date[1]).format("DD"));
      setid("cabana");
      setnumberNights(b.diff(a,"days"));
      
    }
  }

  function ciubarDates(date) {    
    if (date !== null) {
      const a=moment(date[0]);
      const b=moment(date[1]);
      setfromDateCiubar(moment(date[0]).format("DD MM yyyy HH"));
      settoDateCiubar(moment(date[1]).format("DD MM yyyy HH"));

      setnumberHours(b.diff(a,"hours")+1)

      setid("ciubar");
    }
  }

  function getDisabledHours() {
    var hours = [];

    for (let i = 0; i < moment().hour(); i++) {
      if (moment()) {
        hours.push(i);
      }
    }
    return hours;
  }
  async function getAllBookings() {
    const response = await axios.get("http://localhost:5000/booking/house");
    const responseC = await axios.get("http://localhost:5000/booking/ciubar");
    //Trebuie sa fac ca si la dates
    // console.log(responseC?.data?.[0]?.bookTime?.fromDateCiubar);
    // var lastFive = (responseC?.data?.[0]?.bookTime?.fromDateCiubar).substr(
    //   (responseC?.data?.[0]?.bookTime?.fromDateCiubar).length - 5
    // );
    // var lastFivee = (responseC?.data?.[0]?.bookTime?.toDateCiubar).substr(
    //   (responseC?.data?.[0]?.bookTime?.fromDateCiubar).length - 5
    // );

    // console.log("!!!!!!!",response?.data);

    const result = response?.data.map((res) => {
      return {
        start: moment(res?.bookTime?.fromDate, dateFormat),
        end: moment(res?.bookTime?.toDate, dateFormat),
      };
    });
    setDisabledDates([...disabledDates, ...result]);
  }
  useEffect(() => {
    getAllBookings();
  }, []);

  function disableDatesGood(current) {
    return (
      (current && current < moment().endOf("day")) ||
      disabledDates.some((date) =>
        current.isBetween(
          moment(date["start"], dateFormat),
          moment(date["end"], dateFormat),
          "day"
        )
      )
    );
  }

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        style={margin}
      >
        <Grid mb={4} item sx={{ border: "1px solid black" }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            p={2}
            columnGap={4}
            rowGap={2}
          >
            <Grid item md={5} lg={3}>
              <Stack height="200px" bgcolor="#9e9e9e" width="240px"></Stack>
            </Grid>
            <Grid item md={6} lg={8}>
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
                        checked={withCiubar}
                        onChange={() => setwithCiubar(!withCiubar)}
                      />
                    }
                    label="Cu ciubar"
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
                    {name === "cabana" ? (
                      <Space direction="vertical">
                        <RangePicker
                          allowClear={false}
                          format="DD-MM-YYYY"
                          onChange={Dates}
                          disabledDate={disableDatesGood}
                        />
                      </Space>
                    ) : (
                      <Space direction="vertical">
                        <RangePicker
                          allowClear={false}
                          showTime={{ format: "HH" }}
                          format="DD MM yyyy HH"
                          onChange={ciubarDates}
                          disabledHours={getDisabledHours}
                          disabledDate={disableDatesGood}
                        />
                      </Space>
                    )}
                    <Button variant="text">Book now</Button>
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
