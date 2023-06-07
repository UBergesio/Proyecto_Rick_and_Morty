import Card from './Card';

export default function Cards({ characters }) {
  return (
    <div>
      {characters.map((personaje) => {
        const {
          id,
          name,
          status,
          species,
          gender,
          image
        } = personaje;
        
        return (
          <Card 
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
          onclose={() => window.alert('Emulamos que se cierra la card')}
          />
          )
      })}
      </div>
      )
      }
  

