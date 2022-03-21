import React, {useContext} from 'react'
import {Toolbar,IconButton,Button, AppBar,Paper,Grid,Stack,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.scss";
import {ThemeContext} from './../Home/Home'



// const useStyles = makeStyles({
  
// });

// const classes=useStyles();
const Navbar = () => {
 
  const onCLick = () => {
    setShowMenu(!showMenu)
    // show=!show;
  }
const {showMenu,setShowMenu}=useContext(ThemeContext)
  console.log(showMenu);
  


  return (
  <>
  <AppBar sx={{backgroundColor:'transparent', boxShadow:0, alignItems:'flex-end'}} >
      <Toolbar >  
        <Button 
        variant="contained"
        size='large'
        sx={{ 
          backgroundColor:'transparent',
          marginRight:'20px',
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }}}
        >
          Rezerva acum
        </Button>
        {/* Nu merge sa maresc size-ul */}
      <IconButton aria-label="app" size='medium' style={{color:'white', size:'100px' }} onClick={onCLick} >
        <MenuIcon   />       
      </IconButton>
      </Toolbar>
    </AppBar>
   
   
 
    </>
  
  )
}

export default Navbar