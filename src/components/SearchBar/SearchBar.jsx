import style from "./SearchBar.module.css"
import App from '../../App'

const SearchBar = (props) => {
  const { onSearch } = props;
   return (
     <div className={style.container}>
       <input className={style.input} type="search" />
       <button className={style.btn} onClick={() => onSearch(1)}>Agregar</button>
     </div>
   );
}


export default SearchBar