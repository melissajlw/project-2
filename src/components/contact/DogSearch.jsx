import React from 'react'
import { TextField } from '@mui/material'

const DogSearch = ({ search, setSearch }) => {
  return (
    <TextField 
      variant="standard" 
      name="search" 
      id="search"
      value={search}
      placeholder="Search..."
      onChange={event => setSearch(event.target.value)} 
    />
  )
}

export default DogSearch