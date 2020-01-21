import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: "100px",
          margin: "auto",
          display: "block",
          marginTop: "50%"
        }}
      />
    </Fragment>
  );
};

export default Spinner;
