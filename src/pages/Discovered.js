import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      {searchedItem.map((item) => {
        return (
          <div key={item.id} className="food-card">
            <Link to={`/recipe/${item.id}`}>
              <img className="food-poster" src={item.image} alt={item.title} />
              <div className="food-details">
                <h4>{item.title}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Discovered;
