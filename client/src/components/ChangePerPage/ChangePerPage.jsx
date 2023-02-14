import { useState } from "react";
import Validate from "./validation";
import style from "./ChangePerPage.module.css";

const ChangePerPage = ({ setRecipesPerPage, setCurrentPage }) => {
  //Intento de cambiar cantidad de paginas por pagina
  const [input, setInput] = useState({ input: "" });
  const [error, setError] = useState({ input: "", enabled: false });

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInput(value);
    setError(Validate({ input: value }));
  };
  const applyChange = () => {
    setRecipesPerPage(input);
    setCurrentPage(1);
  };
  console.log(input);
  console.log(error.input);
  //=============================================//
  return (
    <div className={style.container}>
      <div className={style.containerInputs}>
        <input
          className={style.styleInput}
          type="number"
          name="valor"
          placeholder="Cards Per Page"
          min="0"
          max="150"
          onChange={handleChange}
        />
        <button
          className={style.styleButton}
          onClick={() => applyChange()}
          disabled={!error.enabled}
        >
          Apply
        </button>
      </div>
      {error.input ? <span className={style.error}>{error.input}</span> : null}
    </div>
  );
};

export default ChangePerPage;
