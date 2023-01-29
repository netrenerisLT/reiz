import React from "react";
import classes from "./Countries.module.css";
import CitiesClass from "../models/cities";

const Country: React.FC<{ countries: CitiesClass[]; loading: boolean }> = (
  props
) => {
  if (props.loading) return <h2>Loading...</h2>;

  return (
    <ul className={classes.cities}>
      {props.countries.map((country) => (
        <li key={country.name} className={classes.item}>
          <h3 className="name">{country.name}</h3>
          <p className="region">Region: {country.region}</p>
          <p className="area">Area size: {country.area}</p>
        </li>
      ))}
    </ul>
  );
};

export default Country;
