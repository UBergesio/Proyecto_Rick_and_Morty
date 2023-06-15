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
      <div className={style.containerTexto}>
        <h3 className={style.titulo}>{character.name}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Status", character.status)}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Species", character.species)}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Gender", character.gender)}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Origin", character.origin?.name)}</h3>
      </div>
      <img src={character.image} alt={character.name} className={style.img} />
    </div>
  );
};

export default Deatil;