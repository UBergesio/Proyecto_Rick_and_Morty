import './App.css';
import axios from 'axios';
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Form from './components/Form/Form';

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
    const filtroCharacters = characters.filter((personaje) =>(
     personaje.id !== id))
     setCharacters(filtroCharacters);
  };

  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const EMAIL = "ulibergesio@gmail.com";
  const PASSWORD = "A1a2a3a4";
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
    setAccess(true);
    navigate("/home");
    }
  };
  
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  
  return (
    <div className="App">
        <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>;
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Deatil/>} />
      </Routes>
    </div>
  );
}
  

  export default App;