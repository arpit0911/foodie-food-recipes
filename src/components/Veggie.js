import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
export default function Popular() {
  const [vegRecipies, setVegRecipies] = useState([]);
  useEffect(() => {
    getVegetarianDishes();
  }, []);

  async function getVegetarianDishes() {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVegRecipies(JSON.parse(check));
    } else {
      try {
        const respose = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
        );
        const data = await respose.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVegRecipies(data);
        // console.log(data);
      } catch (error) {
        alert("Problem getting data", error);
      }
    }
  }

  return (
    <section className="food-section">
      <h2>Vegetarian</h2>
      <div>
        <Splide
          options={{
            perPage: 4,
            gap: ".5rem",
            arrows: true,
            pagination: false,
            drag: "free",
          }}
        >
          {vegRecipies.map((recipe) => {
            return (
              <SplideSlide className="slide-style" key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="food-card">
                    <img
                      className="food-poster"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <div className="food-details">
                      <h5>{recipe.title}</h5>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
