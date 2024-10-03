import React from 'react'
import { Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './styles.css';

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

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="center-container">
        <br/>
        <Typography variant="h5" component="h2" color="primary.dark" className="typography">Dog Spotting App</Typography>
        <Typography variant="body2" component="p" className="typography">Keep track of all the dogs you've seen!</Typography>
        <br />
        <img src='https://toffu.co/cdn/shop/products/pp_flatvector-people-dogwalkers.jpg?v=1607616982'
          width={300} height={300} alt='dog spotting' className="image"></img>
      </div>
    </ThemeProvider>
  )
}

export default Home