import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";

function Discovered() {
  const [searchedItem, setSearchItem] = useState([]);
  let params = useParams();
  useEffect(() => {
    // console.log(params.searched);
    getCuisineData(params.searched);
  }, [params.searched]);
  const getCuisineData = async (name) => {
    const respose = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const data = await respose.json();
    // console.log(data);
    setSearchItem(data.results);
  };
  return (
    <div className="cuisines-grid">
      {searchedItem.map((cuisine) => {
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

export default Discovered;
