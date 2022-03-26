import React from "react";
import img from "../../imagini/imaginea2.jpg";
import Menu from "../Menu";
import "../Home/Home.scss";
import { Box, Grid, Stack,TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
//alt+shift+f  pentru indentare



const Ritualul = () => {
  return (
    <>

      {/* <img className="imgHome" src={img} /> */}
      <div  style={{height: "100vh",width: "100%" , backgroundColor: 'red' }}></div>
      <Grid
        container
        mt={0}
        direction="column"
        // // justifyContent="center"
      >
        <Grid item xs={12}>
          <Box className="containerHome">
            <Menu />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            bgcolor="black"
            color="white"
            p={4}
            px={20}
            spacing={3}
          >
            <Typography variant="h3">
              Experimenteaza cei 4 pasi ai ritualului
            </Typography>
            <Box width="800px">
              <Typography variant="body2">
                &nbsp; &nbsp;Irure et aliquip magna non nulla occaecat ad anim
                aute do. Et sint adipisicing laboris eu culpa amet sit eu
                deserunt. Excepteur ullamco sint fugiat dolore culpa officia ea
                enim nulla. Veniam aliqua ea elit laboris velit voluptate.
                Aliquip eiusmod nostrud anim in enim cupidatat tempor irure
                velit.
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid mt={6} item ml={5} mr={5}>
          <Grid container direction="row" xs={12} p={2}>
            <Grid
              item
              md={4}
              xs={12}
              ml={6}
              height="400px"
              bgcolor="#9e9e9e"
              width="500px"
            ></Grid>
            {/* aici o sa vina poza */}
            <Grid item ml={8} xs={12} md={6} width="600px" direction="column">
              <Typography variant="h5" gutterBottom>
                Pasul 1
              </Typography>
              <Typography variant="h4" gutterBottom>
                <b>Sauna</b>
              </Typography>
              <Typography variant="body1">
                Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
                Nulla laboris do amet consequat sit. Irure occaecat officia ut
                tempor. Laboris qui labore ad consectetur velit laborum sint
                ipsum culpa tempor incididunt aute. Incididunt nostrud veniam
                aliqua nulla excepteur cupidatat excepteur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={6} item ml={5} mr={5}>
          <Grid container direction="row" xs={12} p={2}>
            <Grid item ml={8} xs={12} md={6} width="600px" direction="column">
              <Typography variant="h5" gutterBottom>
                Pasul 2
              </Typography>
              <Typography variant="h4" gutterBottom>
                <b>Lotiune</b>
              </Typography>
              <Typography variant="body1">
                Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
                Nulla laboris do amet consequat sit. Irure occaecat officia ut
                tempor. Laboris qui labore ad consectetur velit laborum sint
                ipsum culpa tempor incididunt aute. Incididunt nostrud veniam
                aliqua nulla excepteur cupidatat excepteur.
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              ml={6}
              height="400px"
              bgcolor="#9e9e9e"
              width="500px"
            ></Grid>
            {/* aici o sa vina poza */}
          </Grid>
        </Grid>
        <Grid mt={6} item ml={5} mr={5}>
          <Grid container direction="row" xs={12} p={2}>
            <Grid
              item
              md={4}
              xs={12}
              ml={6}
              height="400px"
              bgcolor="#9e9e9e"
              width="500px"
            ></Grid>
            {/* aici o sa vina poza */}
            <Grid item ml={8} xs={12} md={6} width="600px" direction="column">
              <Typography variant="h5" gutterBottom>
                Pasul 3
              </Typography>
              <Typography variant="h4" gutterBottom>
                <b>Dus</b>
              </Typography>
              <Typography variant="body1">
                Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
                Nulla laboris do amet consequat sit. Irure occaecat officia ut
                tempor. Laboris qui labore ad consectetur velit laborum sint
                ipsum culpa tempor incididunt aute. Incididunt nostrud veniam
                aliqua nulla excepteur cupidatat excepteur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={6} item ml={5} mr={5}>
          <Grid container direction="row" xs={12} p={2}>
            <Grid item ml={8} xs={12} md={6} width="600px" direction="column">
              <Typography variant="h5" gutterBottom>
                Pasul 4
              </Typography>
              <Typography variant="h4" gutterBottom>
                <b>Ciubar</b>
              </Typography>
              <Typography variant="body1">
                Sit sit ullamco magna ad est esse ea Lorem ullamco cupidatat.
                Nulla laboris do amet consequat sit. Irure occaecat officia ut
                tempor. Laboris qui labore ad consectetur velit laborum sint
                ipsum culpa tempor incididunt aute. Incididunt nostrud veniam
                aliqua nulla excepteur cupidatat excepteur.
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              ml={6}
              height="400px"
              bgcolor="#9e9e9e"
              width="500px"
            ></Grid>
            {/* aici o sa vina poza */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            bgcolor="black"
            // color="white"
            p={4}
            // px={20}
            // spacing={3}
          >
           <TextField
        
          label="Email"
          // size="small"
          variant='outlined'
          sx={{color: "white"}}
          InputLabelProps={{
            sx: { color: '#fff'}, 
         }}
         InputProps={{
          sx: { color: '#fff'},
         }}
        />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Ritualul;
