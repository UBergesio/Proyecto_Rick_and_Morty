import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Deatil from "./components/Deatil/Deatil";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    const repeated = characters.find((item) => item.id === Number(id));
    if (repeated) return alert("¡Este personaje ya fue agregado!");

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
    const filtroCharacters = characters.filter(
      (personaje) => personaje.id !== id
    );
    setCharacters(filtroCharacters);
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ulibergesio@gmail.com";
  const PASSWORD = "A1a2a3a4";


  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }
/*   const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }; */

  const closeSession = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      <Nav onSearch={onSearch} closeSession={closeSession} />
      <Routes>
        <Route
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        ;
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Deatil />} />
      </Routes>
    </div>
  );
}

export default App;
