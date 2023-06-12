import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import App from "../../App";


const Nav = (props) => {
  const { FuncionSearch } = props;
   return (
    <SearchBar onSearch={FuncionSearch} />
  )
}


export default Nav;