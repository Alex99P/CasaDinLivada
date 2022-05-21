import React, { useEffect, useState } from "react";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import {
  Stack,
  Typography,
  Button,
  TextField,
  Container,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import RezervareTeamplate from "./RezervareTeamplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "antd/dist/antd.min.css";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { bookingCiubar, bookingHouse } from "../../redux/actions/booking.js";

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const [fromMonth, setfromMonth] = useState();
  const [toMonth, settoMonth] = useState();
  const [fromDay, setfromDay] = useState();
  const [toDay, settoDay] = useState();

  const [numberNights, setnumberNights] = useState(0);
  const [numberHours, setnumberHours] = useState(0);
  const [isPayDisabled, setIsPayDisabled] = useState(false);
  const [isPayDisabledC, setIsPayDisabledC] = useState(false);
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [fromDateCiubar, setfromDateCiubar] = useState();
  const [toDateCiubar, settoDateCiubar] = useState();
  const [withCiubar, setwithCiubar] = useState(false);
  const [id, setid] = useState("");
  let amount = 10;

  const dispatch = useDispatch();

  useEffect(() => {
    setIsPayDisabled(!(fromDate));
    setIsPayDisabledC(!(fromDateCiubar));
  }, [fromDate, fromDateCiubar]);

  function onToken(token) {
    //  console.log(token);
    if (id === "cabana") {
      const reqObj = {
        token,
        user: JSON.parse(localStorage.getItem("profile")).result._id,
        bookTime: {
          fromDate,
          toDate,
        },
        name: id,
        amount,
        withCiubar,
      };
      console.log(reqObj);

      dispatch(bookingHouse(reqObj));
    } else {
      const reqObj = {
        token,
        user: JSON.parse(localStorage.getItem("profile")).result._id,
        bookTime: {
          fromDateCiubar,
          toDateCiubar,
        },
        name: id,
        amount,
     
      };
      console.log(reqObj);

      dispatch(bookingCiubar(reqObj));
    }
  }

  
  return (
    <>
      <NavbarRezervare />

      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Container maxWidth="lg">
          <Stack
            direction={isMobile ? "column" : "row"}
            // justifyContent="space-between"
            alignItems="flex-start"
          >
            <RezervareTeamplate
              name={"cabana"}
              title={"CASA DIN LIVADA(ADULTI/FAMILII)"}
              body={
                "Irure esse mollit laborum duis et proident elit quis etexercitation esse fugiat in velit. Incididunt nisi sit sunt do      voluptate cillum aute nulla ea magna non. Fugiat velit est nisi      velit culpa in ea. Do amet Lorem eu quis quis dolore pariatur         consequat sit adipisicing. Cupidatat est ea fugiat eiusmod.         Dolore nisi cupidatat quis laboris aute incididunt exercitation       sunt voluptate id incididunt. Consectetur duis deserunt cillumpariatur esse commodo proident ad occaecat aute magna consequat quis."
              }
              textBtn={"Descriere camera"}
              checkBox={true}
              mTop={true}
              setnumberNights={setnumberNights}
              setfromMonth={setfromMonth}
              settoMonth={settoMonth}
              setfromDay={setfromDay}
              settoDay={settoDay}
              setfromDate={setfromDate}
              settoDate={settoDate}
              setid={setid}
              setfromDateCiubar={setfromDateCiubar}
              settoDateCiubar={settoDateCiubar}
              withCiubar={withCiubar}
              setwithCiubar={setwithCiubar}
            />
            <Stack
              mt={isMobile ? 0 : 12}
              p={2}
              pt={0}
              mr={2}
              spacing={3}
              width={"100%"}
              sx={{ maxWidth: "300px" }}
            >
              <Stack
                p={2}
                mt={0}
                sx={{
                  border: "1px solid black",
                  // borderTop: "none",
                  margin: "0 !important",
                }}
              >
                <Typography variant="h5"  >Cabana 200lei/noapte</Typography>
                <Typography variant="body1">Rezervarea mea</Typography>
                <Stack direction="row" justifyContent="flex-start" mt={1} mb={2}>
                  <Stack direction="row" alignItems="center" spacing={0.8}>
                    <FontAwesomeIcon
                      icon={faPersonWalkingLuggage}
                      fontSize="30px"
                      justifyContent="flex-end"
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
                <Typography variant="body2">
                  Rezervare pentru {numberNights}{" "}
                  {numberNights === 1 ? "o noapte" : "nopti"}
                </Typography>
                <StripeCheckout
                  disabled={isPayDisabled}
                  token={onToken}
                  currency="RON"
                  amount={amount * 100}
                  stripeKey="pk_test_51KytTpLuy8CHjVd0G4MYwWK4W02WJuBq8vTR3xijRHkt0Z8nDjpvcWjXXCgftskcgUyWOuJWAe9VgoHvZ9xaUlVW00m9vpL7V9"
                >
                  {/* <Tooltip title="Trebui sa selectati data"> */}
                    <Button variant="outlined" disabled={isPayDisabled}>
                      Booknow
                    </Button>
                  {/* </Tooltip> */}
                </StripeCheckout>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            // justifyContent="space-between"
            alignItems="flex-start"
          >
            <RezervareTeamplate
              name={"sauna"}
              title={"CIUBARUL DIN LIVADA(ADULTI/FAMILII)"}
              body={
                "Irure esse mollit laborum duis et proident elit quis etexercitation esse fugiat in velit. Incididunt nisi sit sunt do      voluptate cillum aute nulla ea magna non. Fugiat velit est nisi      velit culpa in ea. Do amet Lorem eu quis quis dolore pariatur         consequat sit adipisicing. Cupidatat est ea fugiat eiusmod.         Dolore nisi cupidatat quis laboris aute incididunt exercitation       sunt voluptate id incididunt. Consectetur duis deserunt cillumpariatur esse commodo proident ad occaecat aute magna consequat quis."
              }
              textBtn={"Descriere ciubar"}
              checkBox={false}
              mTop={false}
              setnumberNights={setnumberNights}
              setnumberHours={setnumberHours}
              setfromMonth={setfromMonth}
              settoMonth={settoMonth}
              setfromDay={setfromDay}
              settoDay={settoDay}
              setfromDate={setfromDate}
              settoDate={settoDate}
              setid={setid}
              setfromDateCiubar={setfromDateCiubar}
              settoDateCiubar={settoDateCiubar}
            />
            <Stack
              // mt={isMobile ? 1 : 1}
              p={2}
              pt={0}
              mr={2}
              spacing={3}
              width={"100%"}
              sx={{ maxWidth: "300px" }}
            >
              <Stack
                p={2}
                mt={0}
                sx={{
                  border: "1px solid black",
                  // borderTop: "none",
                  margin: "0 !important",
                }}
              >
                <Typography variant="h5"  >Ciubar</Typography>
                <Typography variant="body1">Rezervarea mea</Typography>
                <Stack direction="row" justifyContent="flex-start" mt={1}>
                  <Stack direction="row" alignItems="center" spacing={0.8}>
                    <FontAwesomeIcon
                      icon={faPersonWalkingLuggage}
                      fontSize="30px"
                      justifyContent="flex-end"
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
                  Rezervare pentru {numberHours}{" "}
                  {numberHours === 1 ? "o ora" : "ore"}
                </Typography>
                <StripeCheckout
                  disabled={isPayDisabledC}
                  token={onToken}
                  currency="RON"
                  amount={amount * 100}
                  stripeKey="pk_test_51KytTpLuy8CHjVd0G4MYwWK4W02WJuBq8vTR3xijRHkt0Z8nDjpvcWjXXCgftskcgUyWOuJWAe9VgoHvZ9xaUlVW00m9vpL7V9"
                >
                  {/* <Tooltip title="Trebui sa selectati data"> */}
                    <Button variant="outlined" disabled={isPayDisabledC}>
                      Booknow
                    </Button>
                  {/* </Tooltip> */}
                </StripeCheckout>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            // justifyContent="space-between"
            alignItems="flex-start"
          ></Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Rezervare;
