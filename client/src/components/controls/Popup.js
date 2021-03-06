import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Stack, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Carousel from "./Carousel/Carousel";
import { useTranslation } from "react-i18next";


const useStyles = makeStyles(() => ({
  ".green": {
    color: "green",
  },
  // '.MuiSvgIcon-root':{
  //   color:'green'
  // }
}));

export default function Popup({ openPopup, setOpenPopup, title,name }) {
  const classes = useStyles();
 
const { t, i18n } = useTranslation();
  // console.log(name);
  

  return (
    <Dialog
      open={openPopup}
      onClose={setOpenPopup}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"md"}
    >
      {/* <DialogTitle id="responsive-dialog-title"> */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        p={2}
      >
        <Stack>
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Stack>
          <IconButton
            aria-label="app"
            size="small"
            sx={{ color: "black" }}
            onClick={setOpenPopup}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Stack>
      {/* </DialogTitle> */}
      <Stack justifyContent="center">
        <Stack height="200px" width="auto">
          <Carousel name={name} />
        </Stack>
        {/* </Stack> */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // spacing={10}
          p={2}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <PersonIcon />
            <Typography variant="body2">{name==="cabana" ? "MAX 2" : "MAX 4" }</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SignalWifi4BarIcon className={classes[".green"]} />
              <Typography variant="body2" className={classes[".green"]}>
                Internet
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <DirectionsCarIcon className={classes[".green"]} />
              <Typography variant="body2" className={classes[".green"]}>
                Parcare gratuita
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        // alignItems="center"
        spacing={6}
        m={2}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          width="500px"
        >
          <Typography variant="h5">{name==="cabana" ? t("butoane.2"): t("butoane.3")}</Typography>
          <Typography variant="body2">
         { t("descriereCamera.2")}
          </Typography>
        </Stack>
        <Stack
          direction="column"
          // justifyContent="center"
          alignItems="flex-start"
          // spacing={2}
        >
          {name==="cabana" &&
          <>
          <p>
            <b>Suprafata camera: </b> 20 m^2
          </p>
          <b>Facilitati camera: </b>
          <ul>
            <li>Baie cu dus</li>
            <li>Uscator de par</li>
            <li>Televizor prin cablu/satelit</li>
            <li>Balcon/Terasa</li>
            <li>Fierbator de apa/ Filtru de cafea</li>
            <li>Bucatarie</li>
            <li>Frigider</li>
            <li>Zona de relaxare</li>
            <li>Birou</li>
          </ul>
          </>
}
        </Stack>
      </Stack>
    </Dialog>
  );
}
