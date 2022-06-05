import React from 'react'
import { Toolbar, IconButton, Button, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Currencies from "./Currencies";
import Languages from "./Languages";



const Navbar = ({ showMenu, setShowMenu, bgBlack = false }) => {
  const homestyle=true;
  return (
    <>
      {!showMenu && <AppBar sx={{ backgroundColor: bgBlack ? 'black' : 'transparent', boxShadow: 0, alignItems: 'flex-end' }} >
        <Toolbar >
          <Button
            href="/reservation"
            variant="contained"
            size='medium'
            sx={{
              backgroundColor: 'transparent',
              marginRight: '20px',
              boxShadow: '0',
              border: '1px solid white',
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              },
              "&:hover": {
                color: "white",
              }
            }}
          >
            Rezerva acum
          </Button>
          <Languages homestyle={homestyle}  />
          <IconButton aria-label="app" size='medium' style={{ color: 'white' }} onClick={setShowMenu} >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>}
    </>

  )
}

export default Navbar