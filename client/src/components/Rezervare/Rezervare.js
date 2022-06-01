import React, { useEffect, useState } from "react";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  Container,
  useMediaQuery,
  useTheme,
  Tooltip,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import RezervareTeamplate from "./RezervareTeamplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "antd/dist/antd.min.css";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { bookingCiubar, bookingHouse } from "../../redux/actions/booking.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import Feedback from "./Feedback";

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
    color: "white",
    backgroundColor: "black",
    border: "none",
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "none",
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [fromMonth, setfromMonth] = useState();
  const [toMonth, settoMonth] = useState();
  const [fromDay, setfromDay] = useState();
  const [toDay, settoDay] = useState();
  const [dayCiubar, setDayCiubar] = useState();
  const [monthCiubar, setMonthCiubar] = useState();
  const [fromHour, setfromHour] = useState();
  const [toHour, settoHour] = useState();

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
  const [amountCabana, setAmountCabana] = useState();
  const [amountCiubar, setAmountCiubar] = useState();
  const { t, i18n } = useTranslation();
  const [currency, setCurrency] = useState("RON");
  const [usd,setUsd]=useState();
  const [euro,setEuro]=useState();


  const [open, setOpen] = useState(false);

  const handleClickOpenCabana = () => {
    setid("cabana");
    setOpen(true);
  };
  const handleClickOpenCiubar = () => {
    setid("ciubar");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setIsPayDisabled(!fromDate);
    setIsPayDisabledC(!fromDateCiubar);
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
        amount: totalAmountCabana(),
        withCiubar,
        currency
      };
      // console.log(reqObj);

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
        amount: totalAmountCiubar(),
        currency
      };
      // console.log(reqObj);

      dispatch(bookingCiubar(reqObj));
    }
  }

  function setAmountforCabana(){
    if(currency==="USD")
    {
      setAmountCabana(Math.round(200/usd))
      setAmountCiubar(Math.round(50/usd))
    }
    else if(currency==="EUR")
    {
      setAmountCabana(Math.round(200/euro))
      setAmountCiubar(Math.round(50/euro))

    }
    else{
      setAmountCabana(200)
      setAmountCiubar(50)
    }
  }


  const totalAmountCabana = () => {
    if (withCiubar) {

      return (amountCabana + amountCiubar) * numberNights;
    } else {
      return amountCabana * numberNights;
    }
  };
  const totalAmountCiubar = () => {
    return amountCiubar * numberHours;
  };

  async function getCurrency(){
    const response = await axios.get("http://localhost:5000/booking/currency");
  // console.log(response.data.USD);
  setUsd(response.data.USD)
  setEuro(response.data.EURO)
  
  }
 

  useEffect(() => {
    setAmountforCabana();;
    });
  

  useEffect(() => {
    getCurrency();
    }, []);


  return (
    <>
  

      <NavbarRezervare  
      currency={currency}
      setCurrency={setCurrency}
      />

      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Container maxWidth="lg">
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems="flex-start"
          >
            <RezervareTeamplate
              name={"cabana"}
              title={t("rezervareCabana.1")}
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
                spacing={2}
              >
                <Feedback/>
                <Typography variant="body1">
                  Cabana{" "}
                  {totalAmountCabana() !== 0
                    ? totalAmountCabana()
                    : amountCabana}
                  {totalAmountCabana() !== 0 ? currency :`${currency} /noaptea`}
                </Typography> 
                <Typography variant="body1">Rezervarea mea</Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  mt={1}
                  mb={2}
                >
                  <Stack direction="row" alignItems="center" spacing={0.8}>
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
                <Typography variant="body2">
                  Rezervare pentru {numberNights}{" "}
                  {numberNights === 1 ? "noapte" : "nopti"}
                </Typography>

                <Tooltip
                  title="Trebuie selectata data intai"
                  enterTouchDelay={0}
                >
                  <span>
                    <Button
                      variant="contained"
                      style={btnStyle}
                      disabled={isPayDisabled}
                      onClick={handleClickOpenCabana}
                    >
                      {t("butoane.1")}
                    </Button>
                  </span>
                </Tooltip>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems="flex-start"
          >
            <RezervareTeamplate
              name={"ciubar"}
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
              setfromHour={setfromHour}
              settoHour={settoHour}
              setDayCiubar={setDayCiubar}
              setMonthCiubar={setMonthCiubar}
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
                // pl={10}
                mt={0}
                sx={{
                  border: "1px solid black",
                  // borderTop: "none",
                  margin: "0 !important",
                }}
                justifyContent="center"
                spacing={2}
              >
                <Typography variant="body1">
                  Ciubar{" "}
                  {totalAmountCiubar() !== 0
                    ? totalAmountCiubar()
                    : amountCiubar}
                  {totalAmountCiubar() !== 0 ? currency :` ${currency} /ora`}
                </Typography>
                <Typography variant="body1">Rezervarea mea</Typography>
                <Stack direction="row" justifyContent="flex-start" mt={1}>
                  <Stack direction="row" alignItems="center" spacing={0.8}>
                    <FontAwesomeIcon
                      icon={faPersonWalkingLuggage}
                      fontSize="30px"
                    />

                    <Typography sx={{ fontSize: "15px" }}>
                      {dayCiubar} {monthCiubar} {fromHour} {fromHour !== undefined ? ":00" : ""}
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
                      {dayCiubar} {monthCiubar} {toHour} {toHour !== undefined ? ":00" : ""}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="body2" mt={2}>
                  Rezervare pentru {numberHours}{" "}
                  {numberHours === 1 ? "o ora" : "ore"}
                </Typography>
                <Tooltip
                  title="Trebuie selectata data intai"
                  enterTouchDelay={0}
                >
                  <span>
                    <Button
                      variant="contained"
                      style={btnStyle}
                      disabled={isPayDisabledC}
                      onClick={handleClickOpenCiubar}
                    >
                      {t("butoane.1")}
                    </Button>
                  </span>
                </Tooltip>
                <Dialog
                  //open
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Order Summary"}
                  </DialogTitle>
                  <DialogContent>
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                      >
                        <Stack
                          width="200px"
                          height="200px"
                          bgcolor="#9e9e9e"
                          maxWidth="500px"
                        />
                        <Stack direction="column" spacing={1}>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="body1">Select:</Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {id}
                            </Typography>
                          </Stack>
                          {id === "cabana" ? (
                            <Stack direction="row" spacing={2}>
                              <Typography variant="body1">Dates:</Typography>

                              <Typography
                                variant="body1"
                                sx={{ fontWeight: "bold" }}
                              >
                                {" "}
                                {fromDay} {fromMonth} - {toDay} {toMonth}
                              </Typography>
                            </Stack>
                          ) : (
                            <>
                              <Stack direction="row" spacing={2}>
                                {" "}
                                <Typography variant="body1">Dates:</Typography>
                                <Typography
                                  variant="body1"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {" "}
                                  {fromDay} {fromMonth}
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={2}>
                                <Typography variant="body1">Hours:</Typography>
                                <Typography
                                  variant="body1"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {" "}
                                  {fromHour}:00 - {toHour}:00
                                </Typography>
                              </Stack>
                            </>
                          )}

                          <Stack direction="row" spacing={2}>
                            <Typography variant="body1">
                              {id === "cabana"
                                ? "No. of nights"
                                : " No. of hours"}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {id === "cabana" ? numberNights : numberHours}
                            </Typography>
                          </Stack>
                          <Divider />
                          <Stack direction="row" spacing={2}>
                            <Typography variant="body1">Total:</Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {id === "cabana"
                                ? totalAmountCabana()
                                : totalAmountCiubar()}{" "}
                              {currency}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      style={btnStyle}
                      onClick={handleClose}
                      sx={{ margin: 1 }}
                    >
                      Cancel
                    </Button>
                    <StripeCheckout
                      token={onToken}
                      currency={currency}
                      amount={
                        id === "cabana"
                          ? totalAmountCabana() * 100
                          : totalAmountCiubar() * 100
                      }
                      stripeKey="pk_test_51KytTpLuy8CHjVd0G4MYwWK4W02WJuBq8vTR3xijRHkt0Z8nDjpvcWjXXCgftskcgUyWOuJWAe9VgoHvZ9xaUlVW00m9vpL7V9"
                    >
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        style={btnStyle}
                        sx={{ margin: 1 }}
                      >
                        {t("butoane.1")}
                      </Button>
                    </StripeCheckout>
                  </DialogActions>
                </Dialog>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems="flex-start"
          ></Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Rezervare;
