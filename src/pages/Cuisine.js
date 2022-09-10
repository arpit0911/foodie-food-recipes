import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisines, setCuisines] = useState([]);
  let params = useParams();
  useEffect(() => {
    console.log(params.type);
    getCuisineData(params.type);
  }, [params.type]);
  const getCuisineData = async (name) => {
    // const check = localStorage.getItem(name);
    // if (check) {
    //   setCuisines(JSON.parse(check));
    // } else {
    const respose = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const data = await respose.json();
    // localStorage.setItem(name, JSON.stringify(data.results));
    // console.log(data.results);
    setCuisines(data.results);
    // }
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
