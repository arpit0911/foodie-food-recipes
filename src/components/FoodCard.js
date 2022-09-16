import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ id, title, image }) => {
  return (
    <>
      <Link to={`/recipe/${id}`}>
        <div className="food-card">
          <img className="food-poster" src={image} alt={title} />
          <div className="food-details">
            <h5>{title}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};
export default FoodCard;
