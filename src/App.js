import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import { useState } from "react";
import axios from 'axios';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    const repeated = characters.find((item) => item.id === Number(id));
    if (repeated) return alert("¡Este personaje ya fue agregado!");

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

    const onClose = (id) => { 
    /* const idDelete = parseFloat(id) */
    const filtroCharacters = characters.filter((personaje) =>(
     personaje.id !== id))
     setCharacters(filtroCharacters);
  };
  
  return (
    <div className="App">
        <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>;
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Deatil/>} />
      </Routes>
    </div>
  );
}
  

  export default App;