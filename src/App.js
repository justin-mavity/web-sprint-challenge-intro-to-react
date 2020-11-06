import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL, API_KEY} from './index'
import Characters from './components/Character'
import Details from './components/Details'
import './App.css';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState('1')

const openDetails = id =>{
  setCurrentCharacter(id);
}

const closeDetails = () =>{
  setCurrentCharacter(null);
}

useEffect(() => {
  const fetchCharacter = () => {
    axios.get(`${BASE_URL}/api/${API_KEY}[1,2,3,4,5,6]`)
    .then(res=>{setCharacters(res.data)})
    .catch(err=>{console.log(err)})
  };
  
  fetchCharacter()
}, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((ch)=>{
          return <Characters key={ch.id} info={ch} actiion={openDetails} />
        })
      }
      {
        currentCharacter && (
          <Details characterId={currentCharacter} close={closeDetails}/>
        )
      }
    </div>
  );
}