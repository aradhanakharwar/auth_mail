import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>Shop</Typography>
            <Button component={NavLink} to='/' style={({ isActive }) => {
              return { backgroundColor: isActive ? '#1769aa' : "" }
            }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

            <Button component={NavLink} to='/contact' style={({ isActive }) => {
              return { backgroundColor: isActive ? '#1769aa' : "" }
            }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>
            <Button component={NavLink} to='/login' style={({ isActive }) => {
              return { backgroundColor: isActive ? '#1769aa' : "" }
            }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};