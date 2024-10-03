import React, { useState } from 'react'
import DogCard from './DogCard'
import { Typography } from '@mui/material'
import DogSearch from './DogSearch'

const DogList = ({ dogs }) => {

  // state variables and functions
  const [search, setSearch] = useState("")

  // filters dogs on the page based on search term
  const displayDogs = dogs.filter(dog => {
    const dogName = dog.name.toLowerCase() + " the " + dog.breed.toLowerCase()
    if (dogName.includes(search.toLowerCase())) {
      return dog
    }
  }
  )

  // create DogCard for each dog displayed on the page
  const dogCards = displayDogs.map(dog =>
    <DogCard key={ dog.id } dog={ dog } />
  )

  return (
    <>
      <div>
        <br/>
        <Typography variant="h5" component="h2" color="primary.dark">Dog List</Typography>
        <DogSearch search={ search } setSearch={ setSearch } />
      </div>
      <div>{ dogCards }</div>
    </>
  )
}

export default DogList