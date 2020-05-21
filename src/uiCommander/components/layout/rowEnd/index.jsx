import React from "react";

import Grid from "@material-ui/core/Grid";

const RowEnd = (props) => {
  const { children } = props;

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      {children}
    </Grid>
  );
};
export default RowEnd;
