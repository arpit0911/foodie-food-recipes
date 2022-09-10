import React from "react";
import {
  GiFullPizza,
  GiChopsticks,
  GiNoodles,
  GiHamburger,
} from "react-icons/gi";
import { NavLink as Link } from "react-router-dom";

function Category() {
  return (
    <nav>
      <Link className="nav-item" to="cuisine/Italian">
        <GiFullPizza />
        <h5>Italian</h5>
      </Link>
      <Link className="nav-item" to="cuisine/Chinese">
        <GiChopsticks />
        <h5>Chinese</h5>
      </Link>
      <Link className="nav-item" to="cuisine/Thai">
        <GiNoodles />
        <h5>Thai</h5>
      </Link>
      <Link className="nav-item" to="cuisine/American">
        <GiHamburger />
        <h5>American</h5>
      </Link>
    </nav>
  );
}

export default Category;
