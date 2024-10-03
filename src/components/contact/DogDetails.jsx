import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { baseUrl } from '../../Globals'

const DogDetails = ({ dogs, deleteDog }) => {
  // state variables and functions
  const { id } = useParams()
  const dog = dogs.find(dog => dog.id === id)
  const navigate = useNavigate()

  // function handleDelete() uses user input to delete a dog from the db
  const handleDelete = async event => {
    const result = confirm(`Are you sure you want to delete ${dog.name} the ${dog.breed}?`)

    // if confirmed, delete the dog, otherwise cancel
    if (result) {
      const options = {
        method: "DELETE"
      }
      await fetch(baseUrl + "/dogs/" + id, options)
      deleteDog(id)
      navigate("/dogs")
    } else {
      alert("cancelled")
    }
  }

  return (
    <div>
      <br/>
      <Typography variant="h5" component="h2" color="primary.dark">
        { dog.name }
      </Typography>
      <br/>

      <div>
        <Typography variant="body1" component="p">
          Breed: { dog.breed }
        </Typography>
        <Typography variant="body1" component="p">
          Age: { dog.age }
        </Typography>
        <Typography variant="body1" component="p">
          Owner: { dog.owner }
        </Typography>
        <br/>
        <Button variant="outlined" onClick={ handleDelete }>Delete</Button>
      </div>
    </div>
  )
}

export default DogDetails