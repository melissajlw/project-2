import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/navigation/Navbar'
import DogList from './components/contact/DogList'
import DogForm from './components/contact/DogForm'
import DogDetails from './components/contact/DogDetails'
import DogRandom from './components/contact/DogRandom'
import Home from './components/static/Home'
import { baseUrl } from './Globals'

function App() {
  // state variables and functions
  const [dogs, setDogs] = useState([])

  // only fetch dog data from db on first render
  useEffect (() => {
    fetch(baseUrl + "/dogs")
      .then(resp => resp.json())
      .then(data => setDogs(data))
  }, [])

  // function addDog() adds a new dog to dogs non-destructively
  const addDog = (dog) => {
    setDogs([...dogs, dog])
  }

  // function deleteDog() deletes a dog and removes it from being displayed on the page
  const deleteDog = (id) => {
    const updatedDogs = dogs.filter(dog =>
      dog.id !== id)
    
      setDogs(updatedDogs)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogList dogs={dogs}/>} />
        <Route path="/dogs/new" element={<DogForm addDog={addDog}/>} />
        <Route path="/dogs/:id" element={<DogDetails dogs={dogs} deleteDog={deleteDog}/>} />
        <Route path="/random" element={<DogRandom />} />
      </Routes>
    </Router>
  )
}

export default App
