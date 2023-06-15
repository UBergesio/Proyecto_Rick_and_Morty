import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={style.container}>
      <button className={style.btn} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <hr className={style.hr} />
      <img className={style.image} src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.nombres}>{props.name}</h2>
      </Link>
      <hr className={style.hr} />
      <h2 className={style.description}>{props.status}</h2>
      <h2 className={style.description}>{props.species}</h2>
      <h2 className={style.description}>{props.gender}</h2>
      <h2 className={style.descriptionOrigin}>{props.origin}</h2>
      <hr className={style.hr} />
    </div>
  );
}
