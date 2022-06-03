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
import ciubar1 from "../../imagini/ciubar1.jpg";
import cabana1 from "../../imagini/cabana1.jpg";

import "./Rezervare.scss";

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
  setwithCiubar,
  setfromHour,
  settoHour,
  setDayCiubar,
  setMonthCiubar,
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
  const dateFormatHour = "YYYY-MM-DD HH";
  const [disabledDates, setDisabledDates] = useState([]);
  const [disabledHour, setDisabledHour] = useState([]);

  const handleRoomOpen = () => {
    setShowRoom(true);
  };
  const handleRoomClose = () => {
    setShowRoom(false);
  };
  function Dates(date) {
    // console.log(moment(date[0]).format("DD-MM-YYYY"));

    // Trebuie sa fac sa apara disable toate zilele selectate
    // var today = moment();
    // var tomorrow = moment(today).add(-1, 'days');

    if (date !== null) {
      const a = moment(date[0]);

      setfromDate(moment(date[0]).format("DD-MM-YYYY"));
      setfromMonth(moment(date[0]).format("MMMM"));
      setfromDay(moment(date[0]).format("DD"));

      const b = moment(date[1]);
      settoDate(moment(date[1]).format("DD-MM-YYYY"));
      settoMonth(moment(date[1]).format("MMMM"));
      settoDay(moment(date[1]).format("DD"));
      setid("cabana");
      setnumberNights(b.diff(a, "days"));
    }
  }

  function ciubarDates(date) {
    if (date !== null) {
      const a = moment(date[0]);
      const b = moment(date[1]);
      setfromDateCiubar(moment(date[0]).format("YYYY-MM-DD HH"));
      settoDateCiubar(moment(date[1]).format("YYYY-MM-DD HH"));

      setMonthCiubar(moment(date[0]).format("MMMM"));
      setDayCiubar(moment(date[0]).format("DD"));

      setfromHour(moment(date[0]).format("YYYY-MM-DD HH").slice(11));
      settoHour(moment(date[1]).format("YYYY-MM-DD HH").slice(11));

      setnumberHours(b.diff(a, "hours") + 1);

      setid("ciubar");
    }
  }

  function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    // console.log("Result: ",result);

    return result;
  }

  async function getAllBookings() {
    const response = await axios.get("http://localhost:5000/booking/house");
    const responseC = await axios.get("http://localhost:5000/booking/ciubar");

    const result = response?.data.map((res) => {
      return {
        start: moment(res?.bookTime?.fromDate, dateFormat),
        end: moment(res?.bookTime?.toDate, dateFormat),
      };
    });
    // console.log(result);
    setDisabledDates([...disabledDates, ...result]);

    const resultHour = responseC?.data.map((res) => {
      return {
        from: res?.bookTime?.fromDateCiubar,
        to: res?.bookTime?.toDateCiubar,
      };
    });
    setDisabledHour([...disabledHour, ...resultHour]);
  }
  // console.log(disabledHour);

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

  //Disable hours
  const FULL_DAY = [...Array(24).keys()];

  const ciubarDays = disabledHour.map(({ from }) =>
    moment(from).format("YYYY-MM-DD")
  );
  const handleDisabled = (time) => {
    return {
      disabledHours: () => {
        if (!time) {
          return FULL_DAY;
        }
        if (!ciubarDays.includes(time?.format("YYYY-MM-DD"))) {
          return [];
        }
        const { from, to } =
          disabledHour[ciubarDays.indexOf(time?.format("YYYY-MM-DD"))];

        return range(
          parseInt(moment(from).format("HH")),
          parseInt(moment(to).format("HH"))
        );
      },
    };
  };

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
            // spacing={5}
          >
            <Grid item md={5} lg={3}>
              {name === "cabana" ? (
                <Stack
                  className="imagine"
                  height="200px"
                  width="240px"
                  style={{
                    backgroundImage: `url(${cabana1})`,
                  }}
                ></Stack>
              ) : (
                <Stack
                  className="imagine"
                  height="200px"
                  bgcolor="#9e9e9e"
                  width="240px"
                  style={{
                    backgroundImage: `url(${ciubar1})`,
                  }}
                ></Stack>
              )}
            </Grid>
            <Grid item md={6} lg={8} ml={2}>
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
                          placement={"topRight"}
                          // allowClear={false}
                          format="DD-MM-YYYY"
                          onChange={Dates}
                          disabledDate={disableDatesGood}
                        />
                      </Space>
                    ) : (
                      <Space direction="vertical">
                        <RangePicker
                          placement={"topLeft"}
                          allowClear={false}
                          showTime={{ format: "HH" }}
                          format="DD-MM-YYYY HH"
                          onChange={ciubarDates}
                          disabledTime={handleDisabled}
                          disabledDate={disableDatesGood}
                        />
                      </Space>
                    )}
                    {/* <Button variant="text">Book now</Button> */}
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
                  name={name}
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
