import React from "react";

import Grid from "@material-ui/core/Grid";

const Row = (props) => {
  const { children } = props;

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      {children}
    </Grid>
  );
};
export default Row;
