import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import App from "../../App";


const Nav = (props) => {
  const { onSearch } = props;
   return <SearchBar onSearch={onSearch} />;
}


export default Nav;