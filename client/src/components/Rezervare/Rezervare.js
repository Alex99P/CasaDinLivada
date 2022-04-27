import React, { useState } from "react";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import {
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import RezervareTeamplate from "./RezervareTeamplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
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


  return (
    <>
      <NavbarRezervare />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack
          direction="column"
        >
          <RezervareTeamplate 
          title={"CASA DIN LIVADA(ADULTI/FAMILII)"}
          body={"Irure esse mollit laborum duis et proident elit quis etexercitation esse fugiat in velit. Incididunt nisi sit sunt do      voluptate cillum aute nulla ea magna non. Fugiat velit est nisi      velit culpa in ea. Do amet Lorem eu quis quis dolore pariatur         consequat sit adipisicing. Cupidatat est ea fugiat eiusmod.         Dolore nisi cupidatat quis laboris aute incididunt exercitation       sunt voluptate id incididunt. Consectetur duis deserunt cillumpariatur esse commodo proident ad occaecat aute magna consequat quis."}
          textBtn={"Descriere camera"}
          checkBox={true}
          mTop={true}
          setnumberNights={setnumberNights}
          setfromMonth={setfromMonth}
          settoMonth={settoMonth}
          setfromDay={setfromDay}
          settoDay={settoDay}
          />
          {/* Trebuie sa trimit props-utile si pt sauna */}
          <RezervareTeamplate 
          title={"SAUNA DIN LIVADA(ADULTI/FAMILII)"}
          body={"Irure esse mollit laborum duis et proident elit quis etexercitation esse fugiat in velit. Incididunt nisi sit sunt do      voluptate cillum aute nulla ea magna non. Fugiat velit est nisi      velit culpa in ea. Do amet Lorem eu quis quis dolore pariatur         consequat sit adipisicing. Cupidatat est ea fugiat eiusmod.         Dolore nisi cupidatat quis laboris aute incididunt exercitation       sunt voluptate id incididunt. Consectetur duis deserunt cillumpariatur esse commodo proident ad occaecat aute magna consequat quis."}
          textBtn={"Descriere camera"}
          checkBox={false}
          mTop={false}
          />
        </Stack>

        <Stack
          mt={12}
          sx={{ border: "1px solid black", width: "1000px", height: "200px" }}
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
