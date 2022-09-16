import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FoodCard from "./FoodCard";
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
        setVegRecipies(data.recipes);
        // console.log(data);
      } catch (error) {
        alert("Problem getting data", error);
      }
    }
  }

  return (
    <>
      <h2>Vegetarian</h2>
      {/* <div> */}
      <Splide
        options={{
          perPage: 3,
          gap: ".5rem",
          arrows: false,
          pagination: false,
          drag: "free",
          width: "100%",
        }}
      >
        {vegRecipies.map((recipe) => {
          return (
            <SplideSlide className="slide-style" key={recipe.id}>
              <FoodCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      {/* </div> */}
    </>
  );
}
