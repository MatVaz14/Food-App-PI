import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "./FormCreateRecipe.module.css";
import Validate from "./validate";
import FormShowType from "./FormShowType";
import { Link } from "react-router-dom";

//COMPONENT
const FormCreateRecipe = () => {
  const DIETS = useSelector((state) => state.diets);
  const recipeCreada = useSelector((state) => state.recipesOrigin);

  //ESTADOS LOCALES PARA EL FORM
  const [errores, setErrores] = useState({
    name: "",
    summary: "",
    steps: "",
    enabled: false,
  });

  const [myForm, setMyForm] = useState({
    name: "",
    summary: "",
    image: "",
    steps: "",
  });
  //Estos estados tambien constituyen el objeto completo en si, de la receta, se incluye en el post
  const [diets, setDiets] = useState([]);
  const [dietsName, setDietsName] = useState([]);
  const [range, setRange] = useState(0);

  //FUNCIONES PARA CAPTAR LOS CAMBIOS EN LOS INPUTS Y PASARLOS A LOS ESTADOS
  const handleInputChange = (event) => {
    let exist = recipeCreada.map(
      (recipe) => recipe.name.toLowerCase() === myForm.name.toLowerCase()
    );

    setMyForm({
      ...myForm,
      [event.target.name]: event.target.value,
    });
    setErrores(
      Validate({
        ...myForm,
        [event.target.name]: event.target.value,
      })
    );
  };
  //Funcion para seleccionar dietas
  const handleCheck = (event) => {
    setDiets([...diets, ([event.target.id] = event.target.id)]);

    if (event.target.checked) {
      let data = event.target.value;
      let exist = dietsName.find((element) => element === data);
      if (exist) return;
      setDietsName([...dietsName, ([event.target.name] = event.target.value)]);
    }
    if (!event.target.checked) {
      let dataId = event.target.id;
      let deleteId = diets.filter((element) => element !== dataId);
      setDiets(deleteId);

      let data = event.target.value;
      let exist = dietsName.filter((element) => element !== data);
      setDietsName(exist);
    }
  };
  //Funcion para manejar el estado local del Range, para el healthScore
  const handleRange = (event) => {
    setRange((event.target.name = event.target.value));
  };

  //POST ===> ENVIAR INFO RECOLECTADA DEL FORMULARIO A LA BASE DE DATOS
  const handleSubmit = (event) => {
    event.preventDefault();
    //Hago un controller del estado diets para los valores que se encuentren repedios, solo quede un unico valor
    //con filter voy a retornar un nuevo arreglo con los elementos que cumplan la condicion
    let controllerDiets = diets.filter((item, index) => {
      return diets.indexOf(item) === index;
    });

    axios.post("/", {
      name: myForm.name,
      summary: myForm.summary,
      healthScore: range,
      image: myForm.image,
      steps: myForm.steps,
      DietId: controllerDiets,
    });

    // "Reseteamos" nuestros estados, lo volvemos a su estado inicial
    event.target.reset();
    setDietsName([]);
    setMyForm({
      name: "",
      summary: "",
      image: "",
      steps: "",
    });
    setRange(0);
    setErrores({
      name: "",
      summary: "",
      steps: "",
      enabled: false,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.back}>
        <Link to="/home">
          <button>Go Home!</button>
        </Link>
      </div>
      <div className={style.containerForm}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.styleName}>
            <label className={style.styleLabel}>Name</label>
            <input
              maxLength="30"
              type="text"
              placeholder="type name"
              name="name"
              autoComplete="off"
              onChange={(event) => handleInputChange(event)}
            />
            {errores.name && (
              <span className={style.danger}>{errores.name}</span>
            )}
          </div>
          <div className={style.styleSummary}>
            <label className={style.styleLabel}>Summary</label>
            <textarea
              name="summary"
              onChange={(event) => handleInputChange(event)}
            />
            {errores.summary && (
              <span className={style.danger}>{errores.summary}</span>
            )}
          </div>

          <div className={style.containerRange}>
            <label className={style.styleLabel}>Health Score</label>
            <label className={style.styleRange}>{range}</label>
            <input
              className={style.styleInputRange}
              type="range"
              min="0"
              max="100"
              step="1"
              name="health"
              value={range}
              onChange={(event) => handleRange(event)}
            />
          </div>

          <div className={style.containerImageInput}>
            <label className={style.styleLabel}>Image</label>
            <input
              type="input"
              placeholder="url"
              name="image"
              onChange={(event) => handleInputChange(event)}
            />
          </div>

          <div className={style.containerSteps}>
            <label className={style.styleLabel}>Steps</label>
            <textarea
              name="steps"
              onChange={(event) => handleInputChange(event)}
            />
            {errores.steps && (
              <span className={style.danger}>{errores.steps}</span>
            )}
          </div>

          <div className={style.containerDiets}>
            <label className={style.styleLabel}>Select Diet</label>
            {DIETS.length ? (
              <div>
                {DIETS.map((diet) => (
                  <label className={style.styleTextDiet}>
                    <input
                      className={style.checkStyle}
                      type="checkbox"
                      id={`${diet.id}`}
                      value={`${diet.name}`}
                      onChange={(event) => handleCheck(event)}
                    />
                    {diet.name}
                  </label>
                ))}
              </div>
            ) : (
              <span className={style.avisos}>
                404 - Diet not available at the moment :(
              </span>
            )}
          </div>

          <div className={style.containerButtonCreate}>
            <button
              className={style.buttonSubmit}
              type="submit"
              disabled={!errores.enabled}
              onClick={() => alert("Recipe Created")}
            >
              Create
            </button>
          </div>
        </form>
      </div>

      {/* Otro div en el cual se mostrara algunos datos que estemos rellenando en el formulario por medio de los estados locales */}
      <FormShowType
        myForm={myForm}
        dietsName={dietsName}
        DIETS={DIETS}
        range={range}
      />
    </div>
  );
};

export default FormCreateRecipe;
