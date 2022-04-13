import React, { useState } from "react";
import NavbarRezervare from "../Navbar/NavbarRezervare";
import {
  Stack,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Popup from "../controls/Popup";
import { makeStyles } from "@material-ui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, Space } from "antd";
import moment from "moment";

import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

function Dates(date) {
  // const fromdate=moment(date[0]).format('DD-MM-YYYY');
  // const todate=moment(date[1]).format('DD-MM-YYYY');
  const fromdate = moment(date[0]);
  const todate = moment(date[1]);
  console.log(moment(date[0]).format("DD-MM-YYYY"));
  console.log(moment(date[1]).format("DD-MM-YYYY"));
  console.log(moment.duration(todate.diff(fromdate)).asDays());
}

const useStyles = makeStyles({
  p:{
    fontSize: "1.25rem"
  }
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

 
  // const [showDataPicker, setShowDataPicker] = useState(false);
  // const handleShowDataPicker = (event) => {
  //   setShowDataPicker(true);
  // };

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
    </>
  );
};

export default Rezervare;
