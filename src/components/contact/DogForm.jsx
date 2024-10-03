import React, { useState } from 'react'
import { baseUrl } from '../../Globals'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// theme used for page
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

const DogForm = ({ addDog }) => {

  // initialize fields for the dog form
  const initialState = {
    name: "",
    breed: "",
    age: "",
    owner: ""
  }

  // state variables and functions
  const [dog, setDog] = useState(initialState)

  const navigate = useNavigate()

  // function handleChange() changes state of form based on input field
  const handleChange = event => {
    setDog({
      ...dog,
      [event.target.name]: event.target.value
    })
  }

  // function handleSubmit() uses POST method to send json data of a new dog to the db.json
  const handleSubmit = event => {
    event.preventDefault()

    fetch(baseUrl + "/dogs", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    })
      .then(resp => resp.json())
      .then(data => { 
        addDog(data) 
        // navigate back to the homepage
        navigate("/dogs")
      })
  }

  return (
    <ThemeProvider theme={ theme }>
      <Box
        component="form"
        sx={{ '& .MuultiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={ handleSubmit }
      >
        <br/>
        <Typography variant="h5" component="h2" color="primary.dark">
          Dog Form
        </Typography>
        <div>
        <br/>
          <TextField
            id="name"
            name="name"
            label="Name: "
            variant="standard"
            value={ dog.name }
            onChange={ handleChange }>
          </TextField>
        </div>

        <div>
          <br/>
          <TextField
            id="breed"
            name="breed"
            label="Breed: "
            variant="standard"
            value={ dog.breed }
            onChange={ handleChange }>
          </TextField>
        </div>

        <div>
          <br/>
          <TextField
            id="age"
            name="age"
            label="Age: "
            variant="standard"
            value={ dog.age }
            onChange={ handleChange }>
          </TextField>
        </div>

        <div>
          <br/>
          <TextField
            id="owner"
            name="owner"
            label="Owner: "
            variant="standard"
            value={ dog.owner }
            onChange={ handleChange }>
          </TextField>
        </div>
        <br/>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default DogForm