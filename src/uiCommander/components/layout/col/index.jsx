import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  col: {
    padding: theme.spacing(1),
  },
}));

const Col = (props) => {
  const { children, alignItems, xs, sm, md, lg, xl } = props;
  const classes = useStyles();

  return (
    <Grid
      // container
      className={classes.col}
      item
      xs={xs || false}
      sm={sm || false}
      md={md || false}
      lg={lg || false}
      xl={xl || false}
      // alignItems={alignItems || "flex-start"}
    >
      {children}
    </Grid>
  );
};
export default Col;
