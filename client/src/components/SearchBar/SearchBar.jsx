import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesInclude } from "../../Redux/actions";
import style from "./SearchBar.module.css";
const SearchBar = (props) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInput(value);
  };

  const onSearch = () => {
    dispatch(getRecipesInclude(input));
  };

  return (
    <div className={style.container}>
      <input
        className={style.styleInput}
        type="text"
        name="search"
        id=""
        onChange={handleChange}
      />
      <button className={style.styleButton} onClick={() => onSearch()}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
