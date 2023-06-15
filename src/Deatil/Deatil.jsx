import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";

const Deatil = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  
  const renderizarPersonaje = (propertyName, propertyValue) => {
    if (propertyValue == null) {
      return null;
    }

    return (
      <div>
        <strong>{propertyName}: </strong>
        {propertyValue}
      </div>
    );
  };


  return (
    <div>
      <h3 className={style.titulo}>{character.name}</h3>
      <h4>{renderizarPersonaje("Status", character.status)}</h4>
      <h4>{renderizarPersonaje("Species", character.species)}</h4>
      <h4>{renderizarPersonaje("Gender", character.gender)}</h4>
      <h4>{renderizarPersonaje("Origin", character.origin?.name)}</h4>
      {renderizarPersonaje(
        "Image",
        <img src={character.image} alt={character.name} />
      )}
    </div>
  );
};

export default Deatil;