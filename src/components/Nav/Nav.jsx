import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}


export default Nav;