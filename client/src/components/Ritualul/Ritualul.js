import { makeStyles } from "@material-ui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useRef, useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import img from "../../imagini/imaginea2.jpg";
import "../Home/Home.scss";
import Menu from "../Menu/Menu";
import "./Ritualul.scss";
import sauna from "../../imagini/sauna1.jpg";
import dus from "../../imagini/dus.jpg";
import lotiune from "../../imagini/lotiune.jpg";
import ciubar1 from "../../imagini/ciubar1.jpg";

//alt+shift+f  pentru indentare

const useStyles = makeStyles({
  textField: {
    maxWidth: 300,
    width: "100%",
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
  //nu se mai aplica style-ul de aici
  button: {
    color: "black",
    backgroundColor: "white",
    border: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#e1e3e1",
      border: "none",
    },
  },
});

const btnStyle = {
  color: "black",
  backgroundColor: "white",
  border: "none",
  height: "56px",
  padding: "0 36px",
  "&:hover": {
    backgroundColor: "#e1e3e1",
    border: "none",
  },
};

const Ritualul = () => {
  const classes = useStyles();
  const pageContent = useRef();
  const [toggleHeaderBg, setToggleHeaderBg] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const intersectionObserver = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      setToggleHeaderBg(!isIntersecting);
    }
  );

  useEffect(() => {
    if (pageContent.current) {
      intersectionObserver.observe(pageContent.current);
    }

    return () => {
      intersectionObserver?.unobserve(pageContent.current);
    };
  }, [pageContent]);

  return (
    <div className="containerRitual">
      <Menu bgBlack={toggleHeaderBg} />
      <Box
        className="containerHome"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0)), url(${img})`,
        }}
        ref={pageContent}
      />
      <Box className="descriptionRitual">
        <Box
          height="2rem"
          width="2rem"
          bgcolor="white"
          borderRadius={50}
          // marginBottom={'1rem'}
          marginTop={"1rem"}
        ></Box>
        <Link href="/" underline="none" color="black" variant="h5">
          <Typography variant="h4" className="title">
            Casa din livada
          </Typography>
        </Link>
      </Box>
      {!isMobile && (
        <Box className="descriptionRitual2">
          <Typography variant="h4" className="title">
            La umbra nucului{" "}
          </Typography>
          <Typography variant="body1" className="subtitle">
            Hraneste-ti simturile
          </Typography>
        </Box>
      )}
      <Grid item xs={12}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="black"
          color="white"
          p={4}
          spacing={3}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            Experimenteaza cei 4 pasi ai ritualului
          </Typography>
          <Box maxWidth="800px">
            <Typography variant="body2">
              &nbsp; &nbsp;Irure et aliquip magna non nulla occaecat ad anim
              aute do. Et sint adipisicing laboris eu culpa amet sit eu
              deserunt. Excepteur ullamco sint fugiat dolore culpa officia ea
              enim nulla. Veniam aliqua ea elit laboris velit voluptate. Aliquip
              eiusmod nostrud anim in enim cupidatat tempor irure velit.
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid mt={6} item>
        <Grid container direction="row" p={2} gap={5}>
          <Grid item xs={12} md={7} maxWidth="600px">
            <Typography variant="h5" gutterBottom>
              Pasul 1
            </Typography>
            <Typography variant="h4" gutterBottom>
              <b>Sauna</b>
            </Typography>
            <Typography variant="body1">
              Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
              Nulla laboris do amet consequat sit. Irure occaecat officia ut
              tempor. Laboris qui labore ad consectetur velit laborum sint ipsum
              culpa tempor incididunt aute. Incididunt nostrud veniam aliqua
              nulla excepteur cupidatat excepteur.
            </Typography>
          </Grid>
          <Grid
            className="imagine"
            height="270px"
            width="350px"
            style={{
              backgroundImage: `url(${sauna})`,
            }}
          ></Grid>
        </Grid>
      </Grid>
      <Grid mt={6} item>
        <Grid container direction="row-reverse" p={2} gap={5}>
          <Grid item xs={12} md={7} maxWidth="600px">
            <Typography variant="h5" gutterBottom>
              Pasul 2
            </Typography>
            <Typography variant="h4" gutterBottom>
              <b>Lotiune</b>
            </Typography>
            <Typography variant="body1">
              Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
              Nulla laboris do amet consequat sit. Irure occaecat officia ut
              tempor. Laboris qui labore ad consectetur velit laborum sint ipsum
              culpa tempor incididunt aute. Incididunt nostrud veniam aliqua
              nulla excepteur cupidatat excepteur.
            </Typography>
          </Grid>
          <Grid
            className="imagine"
            height="270px"
            width="350px"
            style={{
              backgroundImage: `url(${lotiune})`,
            }}
          ></Grid>
        </Grid>
      </Grid>


      <Grid mt={6} item>
        <Grid container direction="row" p={2} gap={5}>
          <Grid item xs={12} md={7} maxWidth="600px">
            <Typography variant="h5" gutterBottom>
              Pasul 3
            </Typography>
            <Typography variant="h4" gutterBottom>
              <b>Dus</b>
            </Typography>
            <Typography variant="body1">
              Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
              Nulla laboris do amet consequat sit. Irure occaecat officia ut
              tempor. Laboris qui labore ad consectetur velit laborum sint ipsum
              culpa tempor incididunt aute. Incididunt nostrud veniam aliqua
              nulla excepteur cupidatat excepteur.
            </Typography>
          </Grid>
          <Grid
            className="imagine"
            height="270px"
            width="350px"
            style={{
              backgroundImage: `url(${dus})`,
            }}
          ></Grid>
        </Grid>
      </Grid>
      <Grid mt={6} item>
        <Grid container direction="row-reverse" p={2} gap={5}>
          <Grid item xs={12} md={7} maxWidth="600px">
            <Typography variant="h5" gutterBottom>
              Pasul 4
            </Typography>
            <Typography variant="h4" gutterBottom>
              <b>Ciubar</b>
            </Typography>
            <Typography variant="body1">
              Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
              Nulla laboris do amet consequat sit. Irure occaecat officia ut
              tempor. Laboris qui labore ad consectetur velit laborum sint ipsum
              culpa tempor incididunt aute. Incididunt nostrud veniam aliqua
              nulla excepteur cupidatat excepteur.
            </Typography>
          </Grid>
          <Grid
            className="imagine"
            height="270px"
            width="350px"
            style={{
              backgroundImage: `url(${ciubar1})`,
            }}
          ></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="black"
          p={4}
          spacing={2}
          divider={<Divider flexItem color="white" />}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <TextField
              className={classes.textField}
              label="E-mail"
              variant="outlined"
              InputLabelProps={{
                sx: { color: "#fff" },
              }}
            />
            <Button
              variant="outlined"
              style={btnStyle}
              className={classes.button}
              height={"56px"}
            >
              Aboneza-te
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="flex-end">
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <MailIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <FaAirbnb fontSize={22} />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
    </div>
  );
};

export default Ritualul;
