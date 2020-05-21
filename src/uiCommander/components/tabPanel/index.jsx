import React, { forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  tabPanel: {
    width: "100%",
    height: "100vh",
    borderRight: `1px solid #ccc`,
  },
}));

const TabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabPanel}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
