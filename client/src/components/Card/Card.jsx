import { Link } from "react-router-dom";
import style from "./Card.module.css";
import imageDefault from "./img/comida.jpg";

const Card = ({ id, name, diets, image }) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.containerName}>
          <Link className={style.textStyle} to={`/detail/${id}`}>
            <h1>{name}</h1>
          </Link>
        </div>
        <div className={style.containerImage}>
          <img src={image ? image : imageDefault} alt="" />
        </div>
        <div className={style.containerDiets}>
          {diets?.map((diet) => (
            <li className={style.styleList}>{`💫 ${diet}`}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
