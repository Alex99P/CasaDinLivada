import React, {useContext} from 'react'
import {Toolbar,IconButton,Button, AppBar,Paper,Grid,Stack,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.scss";
import {ThemeContext} from './../Menu'



// const useStyles = makeStyles({
  
// });

// const classes=useStyles();
const Navbar = () => {
 
  const handleMenu = () => {
    setShowMenu(!showMenu)
    // show=!show;
  }
const {showMenu,setShowMenu}=useContext(ThemeContext)
  console.log(showMenu);
  


  return (
  <>
 {!showMenu && <AppBar sx={{backgroundColor:'transparent', boxShadow:0, alignItems:'flex-end'}} >
      <Toolbar >  
        <Button 
        variant="contained"
        size='medium'
        sx={{ 
          backgroundColor:'transparent',
          marginRight:'20px',
          boxShadow:'0',
          border: '1px solid white',
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }}}
        >
          Rezerva acum
        </Button>
      <IconButton aria-label="app" size='medium' style={{color:'white' }} onClick={handleMenu} >
        <MenuIcon  fontSize="large" />       
      </IconButton>
      </Toolbar>
    </AppBar>}
   
   
 
    </>
  
  )
}

export default Navbar