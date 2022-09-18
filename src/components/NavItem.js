import React from "react";
import { NavLink as Link } from "react-router-dom";
import {
    GiFullPizza,
    GiChopsticks,
    GiNoodles,
    GiHamburger,
  } from "react-icons/gi";

const NavItem = ({ type, icon }) => {
  return (
    <>
      <Link className="nav-item" to={`cuisine/${type}`}>
        {icon}
        <h5>{type}</h5>
      </Link>
    </>
  );
};
export default NavItem;
