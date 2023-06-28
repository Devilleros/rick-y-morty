import axios from 'axios'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState } from 'react'

//import SearchBar from './components/SearchBar/SearchBar.jsx'
//import characters /*, { Rick }*/ from './data.js'
//import Card from './components/Card/Card.jsx'

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {

    if(characters.find(char => char.id === parseInt(id))){
      return alert(`El personaje con la id ${id} ya existe`)
    }else if(!id){
      return alert("Hey! you must provide an id")
    }
    axios(`http://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => { if(data.id){ setCharacters([...characters, data])}})
    .catch(err => alert(err.response.data.error))
  }
  
  const onClose = (id) =>{
  setCharacters(characters.filter(cahr => cahr.id !== id))
   //console.log(id);
  //   onClose = {onClose}
  }
  

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch = {onSearch}/>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App

/*
<div>
        <Card
          key ={Rick.id}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
        </div>

        
        <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
          />
          </div>
          */
         
         /*const onSearch = () =>{
       setCharacters([...characters ,example]);
     }*/

       /*const example = {
         id:1,
         name: "Rick Sanchez",
         status: "alive",
         species: "humano",
         gender: "Male",
         origin:{
           name: "Earth (C-137)",
           url: "https://rickandmortyapi.com/api/laction/1"
         },
         image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
       };
       */