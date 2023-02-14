import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imgDefault from "./img/comida.jpg";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [detailRecipe, setDetailRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`/recipes/${id}`)
      .then((response) => setDetailRecipe(response.data[0]));
  }, [id]);

  return (
    <div className={style.containerGeneral}>
      <div className={style.back}>
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>

      <div className={style.containerDetail}>
        <div className={style.containerImage}>
          <img
            src={detailRecipe.image ? detailRecipe.image : imgDefault}
            alt=""
          />
        </div>
        <div className={style.containerData}>
          <div className={style.containerDataLine}>
            <h1>🍴 {detailRecipe.name} 🍷</h1>
            <h2>💛 Health Score: {detailRecipe.healthScore}</h2>
            <hr />
            <h2>Summary</h2>
            <div className={style.containerSummaryText}>
              <p>{detailRecipe.summary}</p>
            </div>
            <hr />
            <h2>Steps</h2>
            <div className={style.containerStepsLi}>
              {detailRecipe?.steps?.map((step) => (
                <li>{`🔥  ${step}`}</li>
              ))}
            </div>
            <hr />
            <h2>Diets</h2>
            <div className={style.containerLiDiet}>
              {detailRecipe?.diets?.map((diet) => (
                <li>{`🌟 ${diet}`}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
