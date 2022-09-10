import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("searched");
    navigate(`/discovered/${inputValue}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <BiSearchAlt />
        <input
          className="search-bar"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </form>
    </>
  );
}

export default Search;
