import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'

const DogCard = ({ dog }) => {

  const listText = dog.name + " the " + dog.breed
  
  return (
    <ListItem>
      <ListItemButton to={`/dogs/${ dog.id }`} component={ Link} >
        <ListItemText primary={ listText }></ListItemText>
      </ListItemButton>
    </ListItem>
   )
}

export default DogCard