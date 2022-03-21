import React,{useState} from 'react'
//rface
import img from '../../imagini/imaginea1.jpg'
import './Home.scss'
import Navbar from '../Navbar/Navbar';
// import { Box } from '@mui/material';
import {Toolbar,IconButton,Button, AppBar,Paper,Grid,Stack,Box} from '@mui/material';

export const ThemeContext=React.createContext();


const Home=()=>{
  const [showMenu, setShowMenu]=useState(false)
 
  // console.log(showMenu)


  return <>
  <ThemeContext.Provider value={{showMenu,setShowMenu}}>
        <div className='containerHome' >
    <Navbar />
    <img className='imgHome' src={img}/>


    {showMenu && <Paper sx={{ width:"200px", height:"100vh", opacity: '0.7'}} elevation={0} >
     {/* <Typography variant="h6" color="initial">Alex</Typography> */}
   
    </Paper>}

    
    </div>
    </ThemeContext.Provider>

    
    
  </>
 
}
export default Home;