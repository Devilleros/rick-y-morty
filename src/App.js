import axios from 'axios'
import './App.css'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useEffect, useState } from 'react'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error404 from './components/Error404/Error404'
import Form from './components/Form/Form'


function App () {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access , setAccess] = useState(false)
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "Abc123#$%"

  function login(userData) {
    if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(() => {!access && navigate("/")} , [access])

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
  
  const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      {
        location.pathname !== "/" && <Nav onSearch = {onSearch}/>
      }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default App



//import SearchBar from './components/SearchBar/SearchBar.jsx'
//import characters /*, { Rick }*/ from './data.js'
//import Card from './components/Card/Card.jsx'
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