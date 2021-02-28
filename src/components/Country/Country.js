import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, flag, region } = props.country;
  const handleAddCountry = props.handleAddCountry;

  return (
    <div className="country">
      <h4>{name}</h4>
      <p>Population : {population}</p>
      <p>
        <small>{region}</small>
      </p>
      <img style={{ height: "100px" }} src={flag} alt="" />
      <br></br>
      <button onClick={() => handleAddCountry(props.country)}>
        Add country
      </button>
    </div>
  );
};

export default Country;
