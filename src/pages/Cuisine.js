import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisines, setCuisines] = useState([]);
  let params = useParams();
  useEffect(() => {
    // console.log(params.type);
    getCuisineData(params.type);
  }, [params.type]);
  const getCuisineData = async (name) => {
    try {
      const respose = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const data = await respose.json();
      setCuisines(data.results);
    } catch (error) {
      alert("problem getting data", error);
    }
  };
  return (
    <div className="cuisines-grid">
      {cuisines.map((cuisine) => {
        return (
          <div key={cuisine.id} className="food-card">
            <Link to={`/recipe/${cuisine.id}`}>
              <img
                className="food-poster"
                src={cuisine.image}
                alt={cuisine.title}
              />
              <div className="food-details">
                <h4>{cuisine.title}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cuisine;
