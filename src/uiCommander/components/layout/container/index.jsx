import React from "react";

import Grid from "@material-ui/core/Grid";

const Container = (props) => {
  const { children } = props;

  return <Grid container>{children}</Grid>;
};
export default Container;
