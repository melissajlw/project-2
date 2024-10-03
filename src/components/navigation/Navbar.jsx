import React from 'react'
import { Link } from 'react-router-dom'

// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#82b1ff',
    },
    secondary: {
      main: '#ffd180',
    },
  },
});

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dog Spotting App
            </Typography>
            <Button variant="contained" color="inherit" to="/" component={Link}>Home</Button>
            <Button variant="contained" color="inherit" to="/dogs" component={Link}>Dogs</Button>
            <Button variant="contained" color="inherit" to="/dogs/new" component={Link}>Add Dog</Button>
            <Button variant="contained" color="inherit" to="/random" component={Link}>Random</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
