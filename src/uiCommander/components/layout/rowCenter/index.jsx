import React from "react";

import Grid from "@material-ui/core/Grid";

const RowCenter = (props) => {
  const { children } = props;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {children}
    </Grid>
  );
};
export default RowCenter;
