import React, { useState } from "react";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import {
  Stack,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Popup from "../controls/Popup";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({

 
});

const Rezervare = () => {
  const btnStyle = {
    marginTop: "20px",
    padding: "5px",
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "black",
    },
  };
  const classes = useStyles();



  const [showRoom, setShowRoom] = useState(false);
  const handleRoomOpen = () => {
    setShowRoom(true);
  };
  const handleRoomClose = () => {
    setShowRoom(false);
  };



  const [showDataPicker, setShowDataPicker] = useState(false);
  const handleShowDataPicker = () => {
    setShowDataPicker(!showDataPicker);
  };
  const [checked, setChecked] = useState(false);



 

  return (
    <>
      <NavbarRezervare />

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        // spacing={10}
        mt={12}
        ml={4}
        mr={4}
      >
        <Grid
          marginBottom={10}
          item
          ml={5}
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
                voluptate cillum aute nulla ea magna non. Fugiat velit est nisi
                velit culpa in ea. Do amet Lorem eu quis quis dolore pariatur
                consequat sit adipisicing. Cupidatat est ea fugiat eiusmod.
                Dolore nisi cupidatat quis laboris aute incididunt exercitation
                sunt voluptate id incididunt. Consectetur duis deserunt cillum
                pariatur esse commodo proident ad occaecat aute magna consequat
                quis.
              </Typography>
              <Button variant="outlined" style={btnStyle} onClick={handleRoomOpen}>
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
                <Stack direction="row">
                  <p>Rezervati perioada</p>
                  <IconButton
                    aria-label="app"
                    // size="medium"
                    style={{ color: "black" }}
                    onClick={handleShowDataPicker}
                  >
                    <KeyboardArrowRightIcon fontSize="medium" />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
            <Grid item>
              <Stack>
              <Popup
                openPopup={showRoom}
                setOpenPopup={handleRoomClose}
            >
            </Popup>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Rezervare;
