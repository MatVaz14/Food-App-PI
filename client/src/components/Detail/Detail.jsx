import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [detailRecipe, setDetailRecipe] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setDetailRecipe(data[0]));
  }, [id]);

  return (
    <div className={style.containerDetail}>
      <div className={style.containerImage}>
        <img src={detailRecipe.image} />
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
  );
};

export default Detail;
