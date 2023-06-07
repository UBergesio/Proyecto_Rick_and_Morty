import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({ characters }) {
  return (
    <div className={style.container}>
      {characters.map((personaje) => {
        const { id, name, status, species, gender, origin, image } = personaje;

        return (
          <Card
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onclose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
      }
  
