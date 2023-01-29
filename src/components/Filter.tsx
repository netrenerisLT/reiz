import React from "react";
import classes from "./Filter.module.css";
import Button from "./UI/Button";
import CitiesClass from "../models/cities";

const Filter: React.FC<{
  filteredCountries: (text: CitiesClass[]) => void;
  smallerThanCountry: any;
  countries: CitiesClass[];
  fetchedCountries: CitiesClass[];
}> = (props) => {
  /* ====================== show A - Z list ====================== */
  const azHandler = () => {
    const data = [...props.countries].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    props.filteredCountries(data);
  };

  /* ====================== show Z - A list ====================== */
  const zaHandler = () => {
    const data = [...props.countries].sort((a, b) =>
      a.name > b.name ? -1 : 1
    );
    props.filteredCountries(data);
  };

  /* ====================== show all countries ====================== */
  const allCountries = () => {
    props.filteredCountries(props.fetchedCountries);
  };

  /* ====================== show smaller than Lithuania  ====================== */
  const isSmallerThanLithuania = () => {
    const data = props.countries.filter((country) => {
      return country.area <= props.smallerThanCountry.area;
    });
    props.filteredCountries(data);
  };

  // /* ====================== show all Oceania Region ====================== */
  const isOceania = () => {
    const data = props.countries.filter((region) => {
      return region.region === "Oceania";
    });
    props.filteredCountries(data);
  };

  return (
    <div className={classes.div}>
      <Button onClick={azHandler}>Sort by A-Z</Button>
      <Button onClick={zaHandler}>Sort by Z-A</Button>
      <Button onClick={isOceania}>Show Oceania Region</Button>
      <Button onClick={isSmallerThanLithuania}>
        Show smaller than Lithuania
      </Button>
      <Button onClick={allCountries}>Reset Countries List</Button>
    </div>
  );
};
export default Filter;
