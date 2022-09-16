import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FoodCard from "./FoodCard";
export default function Popular() {
  const [popularRecipies, setPopularRecipies] = useState([]);
  useEffect(() => {
    getPopularDishes();
  }, []);

  async function getPopularDishes() {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopularRecipies(JSON.parse(check));
    } else {
      try {
        const respose = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
        );
        const data = await respose.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopularRecipies(data.recipes);
        // console.log(data);
      } catch (error) {
        alert("Problem getting data", error);
      }
    }
  }

  return (
    <>
      <h2>Popular</h2>
      {/* <div> */}
      <Splide
        options={{
          perPage: "3",
          gap: ".5rem",
          arrows: false,
          pagination: false,
          drag: "free",
          width: "100%",
        }}
      >
        {popularRecipies.map((recipe) => {
          return (
            <SplideSlide className="slide-style" key={recipe.id}>
              <FoodCard
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      {/* </div> */}
    </>
  );
}
