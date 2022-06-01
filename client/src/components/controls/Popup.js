import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Stack, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Carousel from "./Carousel/Carousel";

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
  // const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

  // console.log(name);
  

  return (
    <Dialog
      open={openPopup}
      onClose={setOpenPopup}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"sm"}
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
            <Typography variant="body2">MAX 2</Typography>
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
          <Typography variant="h5">Descriere camera</Typography>
          <Typography variant="body2">
            Qui enim sint Lorem sunt. Sunt ea voluptate pariatur duis
            exercitation ex eiusmod anim irure do minim qui. Lorem aute cillum
            dolor sint elit aute dolore laborum sunt. Aliquip laboris nisi
            excepteur reprehenderit esse ullamco aliqua occaecat do ut. Qui
            consectetur ipsum proident fugiat. Culpa occaecat culpa enim labore.
            Exercitation quis et excepteur aute. Aliquip laboris nisi excepteur
            reprehenderit esse ullamco aliqua occaecat do ut. Qui consectetur
            ipsum proident fugiat. Culpa occaecat culpa enim labore.
            Exercitation quis et excepteur aute.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          // justifyContent="center"
          alignItems="flex-start"
          // spacing={2}
        >
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
        </Stack>
      </Stack>
    </Dialog>
  );
}
