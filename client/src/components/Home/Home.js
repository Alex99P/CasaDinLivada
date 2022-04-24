import React,{useEffect} from "react";
import img from "../../imagini/imaginea1.jpg";
import Menu from "../Menu";
import { Box, Grid, Stack } from "@mui/material";
import "./Home.scss";
import {useDispatch} from 'react-redux';
import {getUsers} from '../../redux/actions/users' 

import {useSelector} from 'react-redux';


const Home = () => {
  
  // const dispatch=useDispatch();
  // useEffect(()=>{
  //   dispatch(getUsers());
  // },[dispatch])

  // const users=useSelector((state)=> state.users)
  // console.log(users);

  return (
    <>
      <Box className="containerHome">
        <img className="imgHome" src={img} />
        <Stack className="menuWraper">
          <Menu />
        </Stack>
      </Box>
    </>
  );
};
export default Home;
