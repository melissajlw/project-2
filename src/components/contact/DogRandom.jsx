import React from 'react'
import { useState, useEffect } from 'react'
import { Typography, Container } from '@mui/material'

const DogRandom = () => {
    // state variables and functions
    const [img, setImg] = useState("")

    // only fetch one time
    useEffect (() => {
        getDogPic()
    }, [])

    // function getDogPic() fetches image from public database
    async function getDogPic() {
        const resp = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await resp.json()
        setImg(data)
    }

    return(
        <Container>
            <br/>
            <Typography variant="h5" component="h2" color="primary.dark">Random Dog Pic!</Typography>
            <img src={ img.message } onClick={ getDogPic }></img>
        </Container>
    )
}

export default DogRandom