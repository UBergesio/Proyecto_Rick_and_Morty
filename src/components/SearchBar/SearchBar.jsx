import style from "./SearchBar.module.css"

export default function SearchBar(onSearch) {
   return (
     <div>
       <input className={style.input} type="search" />
       <button className={style.btn} onClick={() => onSearch(1)}>Agregar</button>
     </div>
   );
}
