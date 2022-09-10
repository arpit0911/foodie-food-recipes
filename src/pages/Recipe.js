import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [recipeInfo, setRecipeInfo] = useState({});
  const params = useParams();
  const [active, setActive] = useState("instruction");

  useEffect(() => {
    getRecipeInformation(params.id);
  }, [params.id]);

  const getRecipeInformation = async (id) => {
    const respose = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await respose.json();
    // console.log(data);
    setRecipeInfo(data);
  };

  return (
    <section>
      <div className="recipe-information-container">
        <div className="recipe-container">
          <img src={recipeInfo.image} alt={recipeInfo.title} />
        </div>
        <div className="recipe-container">
          <div>
            <button
              onClick={() => setActive("instruction")}
              className={active === "instruction" ? "btn btn-active" : "btn"}
            >
              Instruction
            </button>
            <button
              onClick={() => setActive("ingredients")}
              className={active === "ingredients" ? "btn btn-active" : "btn"}
            >
              Ingredients
            </button>
          </div>
          {active === "instruction" ? (
            <div>
              <h5 dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></h5>
              <h5
                dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
              ></h5>
            </div>
          ) : (
            <ul>
              {recipeInfo.extendedIngredients.map((item) => {
                return <li key={item.id}>{item.original}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Recipe;
