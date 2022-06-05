import React,{useRef} from "react";
import {
  Stack,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Menu from "../Menu/Menu";
import "./DespreNoi.scss";
import { makeStyles } from "@material-ui/styles";
import Maps from "./Maps";
import emailjs from "emailjs-com";


const useStyles = makeStyles({
  textField: {
    width: 400,
    "@media (max-width: 768px)": {
     width: 250
    },
    zIndex: 1,
    "& .MuiInputBase-root": {
      color: "black",
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

const DespreNoi = () => {
  const btnStyle = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    height: "36px",
    width: "50%",
    // zIndex:-1,
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "none",
    },
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  const form = useRef();

  //Send email succesfull 
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vmehxpa', 'template_ps2ux29', e.target, 'FmJOI8feATbHTckum')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

  return (
    <Stack
      className="containerDespreNoi"
      justifyContent="center"
      alignItems="center"
    >
      <Menu />
      <Stack
        className="containerDespreNoi2"
        width={800}
        // height={500}
        bgcolor={"#dedede"}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        
      >
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems={isMobile ? "center" : ""}
          marginTop={isMobile ? -25 : -10}
          spacing={isMobile ? 2 : 10}
          // ml={isMobile ? 0 : -10}
        >
          <Stack className="containerWrite">
            <Typography variant="h6" color="black">
              Ai intrebari ?
            </Typography>
            <Typography variant="h6" color="black">
              Contacteaza-ne
            </Typography>
          </Stack>
          <form ref={form}  onSubmit={sendEmail}>
            <Stack
              className="containerform"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                className={classes.textField}
                // width={isMobile ? 250 : 400}
                size={"small"}
                label="Nume"
                variant="outlined"
                name="name"
                required
              />
              <TextField
                className={classes.textField}
                // sx={{ width: 400 }}
                size={"small"}
                label="E-mail"
                variant="outlined"
                name="email"
                required
              />
              <TextareaAutosize
                className={classes.textField}
                aria-label="minimum height"
                minRows={4}
                placeholder="Type your message here..."
                style={{ resize: "none", backgroundColor:"#dedede" }}
                // bgcolor={"#dedede"}
                name="message"
                required
              />
              <Button   type="submit" variant="outlined" style={btnStyle}> 
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 0 : 4}
          mt={10}
        >
          <Stack className="containerWrite" spacing={1} 
          marginLeft={isMobile ? 0 : -40  }
          
          >
            <Typography variant="body1" color="black">
              Cum se ajunge la cabana ?
            </Typography>
            <Typography variant="body2" color="black">
              Str Garii, nr. 1177, sat Maneciu-Pamanteni
            </Typography>
          </Stack>
          <Stack marginLeft={isMobile ? -7 : 10} mt={isMobile ? 4 : 0}>
            <Maps />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DespreNoi;
