import './App.css';
/* import Card from './components/Card/Card'; */
/* import SearchBar from './components/SearchBar/SearchBar';  */
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  
  const FuncionSearch = (props) => {
    setCharacters([
      ...characters,
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
    ]);
  };
  
  
  return (
    <div className="App">
      <Nav FuncionSearch={FuncionSearch} />
      <Cards characters={characters} />
    </div>
  );
  }
  
  export default App;
  