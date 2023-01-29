import React from "react";
import classes from "./Pagination.module.css";
import Button from "./UI/Button";

const Pagination: React.FC<{
  countriesPerPage: number;
  totalCountries: number;
  paginate: (text: number) => void;
}> = (props) => {
  const pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalCountries / props.countriesPerPage);
    i++
  ) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <div className={classes.div}>
        {pageNumber.map((number) => (
          <Button
            key={number}
            className={classes.button}
            onClick={() => props.paginate(number)}
          >
            {number}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
