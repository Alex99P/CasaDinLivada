import React, { useState } from "react";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import {
  Stack,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import Popup from "../controls/Popup";
import { makeStyles } from "@material-ui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";


// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

// Style
const useStyles = makeStyles({
  p: {
    fontSize: "1.25rem",
  },
  feedback: {
    position: "absolute",
    color: "#fff",
    fontSize: "38px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textField: {
    "& .MuiInputBase-root": {
      color: "black",
      borderRadius: "0px",
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
});

const Rezervare = () => {
 

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

  const { RangePicker } = DatePicker;

  const classes = useStyles();

  //whole date
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  //Months
  const [fromMonth, setfromMonth] = useState();
  const [toMonth, settoMonth] = useState();
  //Days
  const [fromDay, setfromDay] = useState();
  const [toDay, settoDay] = useState();

  const [numberNights, setnumberNights] = useState(0);

  const [showRoom, setShowRoom] = useState(false);
  const handleRoomOpen = () => {
    setShowRoom(true);
  };
  const handleRoomClose = () => {
    setShowRoom(false);
  };

  const [checked, setChecked] = useState(false);

  function Dates(date) {
    const fromdate = moment(date[0]);
    setfromDate(fromdate.format("DD-MM-YYYY"));
    setfromMonth(fromdate.format("MMMM"));
    setfromDay(fromdate.format("DD"));

    const todate = moment(date[1]);
    settoDate(todate.format("DD-MM-YYYY"));
    settoMonth(todate.format("MMMM"));
    settoDay(todate.format("DD"));

    setnumberNights(moment.duration(todate.diff(fromdate)).asDays());
  }

  return (
    <>
      <NavbarRezervare />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          mt={12}
        >
          <Grid
            marginBottom={10}
            item
            ml={3}
            mr={5}
            sx={{ border: "1px solid black" }}
          >
            <Grid container direction="row" alignItems="center" p={2}>
              <Grid item md={2} mr={10}>
                <Stack height="200px" bgcolor="#9e9e9e" width="240px"></Stack>
              </Grid>
              <Grid item ml={3} md={7}>
                <Typography variant="h6" gutterBottom>
                  CASA DIN LIVADA(ADULTI/FAMILII)
                </Typography>
                <Typography variant="body2">
                  Irure esse mollit laborum duis et proident elit quis et
                  exercitation esse fugiat in velit. Incididunt nisi sit sunt do
                  voluptate cillum aute nulla ea magna non. Fugiat velit est
                  nisi velit culpa in ea. Do amet Lorem eu quis quis dolore
                  pariatur consequat sit adipisicing. Cupidatat est ea fugiat
                  eiusmod. Dolore nisi cupidatat quis laboris aute incididunt
                  exercitation sunt voluptate id incididunt. Consectetur duis
                  deserunt cillum pariatur esse commodo proident ad occaecat
                  aute magna consequat quis.
                </Typography>
                <Button
                  variant="outlined"
                  style={btnStyle}
                  onClick={handleRoomOpen}
                >
                  Descriere camera
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                    }
                    label="Cu mic dejun"
                  />
                  {/* <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                > */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon size="large" />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <p className={classes.p}>Rezervati perioada</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Space direction="vertical">
                        <RangePicker format="DD-MM-YYYY" onChange={Dates} />
                      </Space>
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
                  ></Popup>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Stack
          mt={12}
          sx={{ border: "1px solid black", width: "380px", height: "200px" }}
          p={2}
          mr={2}
          spacing={3}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            spacing={2}
          >
            <Stack
              height="50px"
              width="50px"
              bgcolor="black"
              borderRadius={50}
              color="white"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                9.8
              </Typography>
            </Stack>
            <Typography variant="h6">Excelent</Typography>
          </Stack>

          <Stack justifyContent="center" alignItems="flex-start">
            <Typography variant="body1">Rezervarea mea</Typography>
            <Stack direction="row" justifyContent="center" mt={1}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.8}
              >
                <FontAwesomeIcon
                  icon={faPersonWalkingLuggage}
                  fontSize="30px"
                />
                <Typography sx={{ fontSize: "15px" }}>
                  {fromDay} {fromMonth}
                </Typography>
              </Stack>
              <ArrowForwardIcon sx={{ margin: "0px 10px 0px 10px" }} />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.8}
              >
                <FontAwesomeIcon
                  icon={faPersonWalkingLuggage}
                  fontSize="30px"
                />
                <Typography sx={{ fontSize: "15px" }}>
                  {toDay} {toMonth}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="body2" mt={2}>
              Rezervare pentru {numberNights}{" "}
              {numberNights === 1 ? "o noapte" : "nopti"}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <TextField
              className={classes.textField}
              label="COD PROMOTIONAL"
              variant="outlined"
              size="small"
              sx={{ marginTop: "20px" }}
            />
            <Button
              variant="outlined"
              style={btnStyle}
              sx={{ marginTop: "20px", height: "40px", borderRadius: "0px" }}
            >
              Verifica
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <PhoneIcon sx={{ fontSize: 40 }} />
            <Stack direction="column" justifyContent="flex-start">
              <Typography variant="body1">0773346017</Typography>
              <Typography variant="body2">
                Aveti nevoie de ajutor? Suna-ne.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Rezervare;
