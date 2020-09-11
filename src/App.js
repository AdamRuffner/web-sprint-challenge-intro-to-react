import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './index'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [height, setHeight] = useState(null)
  const [mass, setMass] = useState(null)
  const [birthYear, setBirthYear] = useState(null)
  const [eyeColor, setEyeColor] = useState('')
  const [hairColor, setHairColor] = useState('')
  const [skinColor, setSkinColor] = useState('')
  const [characterList, setCharacterList] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        setName(res.data.results.name)
        setGender(res.data.results.gender)
        setHeight(res.data.results.height)
        setMass(res.data.results.mass)
        setBirthYear(res.data.results.birth_year)
        setEyeColor(res.data.results.eye_color)
        setHairColor(res.data.results.hair_color)
        setSkinColor(res.data.results.skin_color)
        setCharacterList(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterList.map((item) => {
        return (
          <Character 
            key = {item.name}
            name ={item.name}
            gender = {item.gender}
            height = {item.height}
            mass = {item.mass}
            birthYear = {item.birth_year}
            eyeColor = {item.eye_color}
            hairColor = {item.hair_color}
            skinColor = {item.skin_color}
          />
        )
      })}
      </div>
  );
}

export default App;
