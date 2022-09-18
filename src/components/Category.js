import React from "react";
import {
  GiFullPizza,
  GiChopsticks,
  GiNoodles,
  GiHamburger,
} from "react-icons/gi";
import { NavLink as Link } from "react-router-dom";
import NavItem from "./NavItem";

function Category() {
  const navData = [
    { type: "Italian", icon: <GiFullPizza /> },
    { type: "Chinese", icon: <GiChopsticks /> },
    { type: "Thai", icon: <GiNoodles /> },
    { type: "American", icon: <GiHamburger /> },
  ];
  return (
    <nav>
      {navData.map((item) => {
        return <NavItem type={item.type} icon={item.icon} />;
      })}
    </nav>
  );
}

export default Category;
