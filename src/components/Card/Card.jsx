import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <button
        className={style.btn}
        onClick={() => window.alert("Emulamos que se cierra la card")}
      >
        X
      </button>
      <h2 className={style.nombres}>{props.name}</h2>
      <h2 className={style.description}>{props.status}</h2>
      <h2 className={style.description}>{props.species}</h2>
      <h2 className={style.description}>{props.gender}</h2>
      <h2 className={style.descriptionOrigin}>{props.origin}</h2>
      <img className={style.image} src={props.image} alt="" />
    </div>
  );
}
