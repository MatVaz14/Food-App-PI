import style from "./FormCreateRecipe.module.css";
import comida from "./img/comida.jpg";

const FormShowType = ({ myForm, dietsName, range, DIETS }) => {
  return (
    <div className={style.containerShow}>
      <div className={style.showText}>
        <h1>{myForm.name}</h1>
        <h3>{`Helath Score: ${range}`}</h3>
        <img
          src={myForm.image ? myForm.image : comida}
          width="200px"
          height="200px"
          alt=""
        />
        {DIETS.length ? (
          <div className={style.showDiets}>
            {dietsName ? dietsName.map((diet) => <li>{diet}</li>) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FormShowType;
