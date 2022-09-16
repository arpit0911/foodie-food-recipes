import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";

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
          <FoodCard
            key={cuisine.id}
            id={cuisine.id}
            image={cuisine.image}
            title={cuisine.title}
          />
        );
      })}
    </div>
  );
}

export default Cuisine;
