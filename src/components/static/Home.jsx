import React from 'react'
import { Typography } from '@mui/material'
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

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <br/>
        <Typography variant="h5" component="h2" color="primary.dark">Dog Spotting App</Typography>
        <Typography variant="body2" component="p">Keep track of all the dogs you've seen!</Typography>
        <br />
        <img src='https://toffu.co/cdn/shop/products/pp_flatvector-people-dogwalkers.jpg?v=1607616982'
          width={300} height={300} alt='homepage image'></img>
      </div>
    </ThemeProvider>
  )
}

export default Home