import React,{useState} from 'react'
//rface
import img from '../../imagini/imaginea1.jpg'
import './Home.scss'
import Navbar from '../Navbar/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton,Button, AppBar,Paper,Grid,Link,Box, Stack, Typography} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { FaAirbnb } from 'react-icons/fa';



export const ThemeContext=React.createContext();


const Home=()=>{
  const [showMenu, setShowMenu]=useState(false)
  const onCLick = () => {
    setShowMenu(!showMenu)
  }
 


  return <>
  <ThemeContext.Provider value={{showMenu,setShowMenu}}>
        <div className='containerHome' >
    <img className='imgHome' src={img}/>
    {/* <Typography variant="h2" color="initial">Casa Din Livada</Typography> */}
     <Grid container >
        <Grid item ><Box bgcolor={'primary.light'} ><Navbar/></Box></Grid>
    </Grid>
    <Grid container
  direction="row"
  justifyContent="flex-end">
     {/* xs={12} */}
        
          {showMenu &&
          <Grid item   >
           <Paper
           sx={{ width:"400px", height:"100vh", opacity: '0.9'}} elevation={0} xs={12} >
          <IconButton aria-label="app" size='medium' sx={{color:'black', size:'200px', marginLeft:'10px' }} onClick={onCLick}>
            <CloseIcon  fontSize="large"    />       
          </IconButton>
          <Stack 
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}>
            <Typography variant="h3" color="initial" marginBottom={2}   marginTop={1}>Casa din Livada</Typography>
          <Link href="/ritualul" underline="hover" color="black" variant='h5' >Ritualul</Link>
          <Link href="/cazare" underline="hover" color="black" variant='h5'>Cazare</Link>
          <Link href="/relaxare" underline="hover" color="black" variant='h5'>Relaxare</Link>
          <Link href="/tarife" underline="hover" color="black" variant='h5'>Tarife</Link>
          </Stack>
          <Stack mt={3} direction="column"
          justifyContent="flex-start"
          alignItems="center" >
          <Link href="/intrebari-frecvente" underline="hover" color="black" variant='body1' >Intrebari frecvente </Link>
          <Link href="/locatie" underline="hover" color="black" variant='body1'>Cum ajung aici?</Link>
          <Link href="/despre-noi" underline="hover" color="black" variant='body1'>Despre noi</Link>
          <Link href="/galerie-foto" underline="hover" color="black" variant='body1'>Galerie foto</Link>
      
          </Stack>
          <Stack mt={15} direction="row" justifyContent="center" alignItems="flex-end" >
            <IconButton sx={{color:'black'}} >
              <FacebookIcon/>
            </IconButton>
            
            <IconButton sx={{color:'black'}} >
            <InstagramIcon/>
            </IconButton>

            <IconButton sx={{color:'black'}} >
            <MailIcon/>
            </IconButton>

            <IconButton sx={{color:'black'}} >
            <FaAirbnb fontSize={22}/>
            </IconButton>
          </Stack>
         </Paper>
         
         </Grid>}
         
         
        

    </Grid>
   

    </div>
    </ThemeContext.Provider>

    
    
  </>
 
}
export default Home;