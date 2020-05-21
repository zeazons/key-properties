import React, { forwardRef } from "react";

import "./style.css";

const NumberField = forwardRef((props, ref) => {
  const { children, colon } = props;

  // return <label>{colon ? { children } + " :" : { children }}</label>;
  return colon ? (
    <label ref={ref}> {`${children} : `}</label>
  ) : (
    <label ref={ref}> {children} </label>
  );
});
export default NumberField;
