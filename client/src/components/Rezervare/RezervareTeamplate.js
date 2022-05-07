import React, { useState } from "react";
import {
  Stack,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Popup from "../controls/Popup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "antd/dist/antd.min.css";
import { bookingHouse } from "../../redux/actions/booking.js";
import { useDispatch } from "react-redux";



const RezervareTeamplate = ({title,body,textBtn,checkBox,mTop,setnumberNights,setfromMonth,settoMonth,setfromDay,settoDay}) => {
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
  let margin;
  if(mTop){
   margin={
    marginTop:"96px",
  }
  }else{
     margin={
      marginTop:"0px",
    }
  }
  // variables for room
  const [showRoom, setShowRoom] = useState(false);
  const handleRoomOpen = () => {
    setShowRoom(true);
  };
  const handleRoomClose = () => {
    setShowRoom(false);
  };
  const [checked, setChecked] = useState(false);
  
  // variables for date
  const { RangePicker } = DatePicker;
    //whole date
    const [fromDate, setfromDate] = useState();
    const [toDate, settoDate] = useState();
    const dispatch = useDispatch();


  
  

    function Dates(date) {
    //   console.log(moment(date[0]).format("DD-MM-YYYY"));
    //   console.log(moment(date[1]).format("DD-MM-YYYY"));
      const fromdate = moment(date[0]);
      setfromDate(moment(date[0]).format("DD-MM-YYYY"));
      setfromMonth(moment(date[0]).format("MMMM"));
      setfromDay(moment(date[0]).format("DD"));
      
      // console.log(fromDate);
  
      const todate = moment(date[1]);
      settoDate(moment(date[1]).format("DD-MM-YYYY"));
      settoMonth(moment(date[1]).format("MMMM"));
      settoDay(moment(date[1]).format("DD"));
      // console.log(toDate);

      setnumberNights(moment.duration(todate.diff(fromdate)).asDays());
      
      // setnumberNights(2);
    }
    // console.log(fromDate+"-"+toDate);
    // console.log(fromMonth+"-"+toMonth);
    // console.log(fromDay+"-"+toDay);

    function bookNow(){
      const reqObj={
        user: JSON.parse(localStorage.getItem('profile')).result._id,
        // cabana sau ciubar trebuie sa le fac un id
        bookTime: {
          fromDate,
          toDate
        }

      }
      // console.log(JSON.parse(localStorage.getItem('profile')).result._id);
      // console.log(fromDate);
      console.log(reqObj);
      dispatch(bookingHouse(reqObj));
      
    }
  
  
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        style={margin}
      
      >
        <Grid
          marginBottom={4}
          item
          ml={3}
          mr={5}
          sx={{ border: "1px solid black" }}
        >
          <Grid container direction="row" alignItems="center" p={2}>
            <Grid item md={2} mr={10}>
              <Stack height="200px" bgcolor="#9e9e9e" width="240px"></Stack>
            </Grid>
            <Grid item ml={7} md={7}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2">
                {body}
              </Typography>
              <Button
                variant="outlined"
                style={btnStyle}
                onClick={handleRoomOpen}
              >
                {textBtn}
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
              {checkBox ?  <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Cu mic dejun"
                />: <Stack></Stack>}
        
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon size="large" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p style={{fontSize:"1.25rem"}}>Rezervati perioada</p>
                  </AccordionSummary>
                  <AccordionDetails >
                     <Space direction="vertical"> 
                      <RangePicker format="DD-MM-YYYY" onChange={Dates} />
                    </Space>
                  <Button variant="text" onClick={bookNow} >Book now
                  </Button>
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
                  title={title}
                  // va mai trebui si alte props
                ></Popup>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RezervareTeamplate;
