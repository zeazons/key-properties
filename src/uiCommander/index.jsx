import React, { forwardRef, useRef, useMemo } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import ManagerBloc from "../bloc/ManagerBloc";
import UIEventBloc from "./EventBloc";

import TabPanel from "./components/tabPanel";
import KeyProperties from "./KeyProperties";
import KeyInfo from "./KeyInfo";

import { useStyles } from "./Style";

const Properties = forwardRef((props) => {
  let managerBloc = new ManagerBloc();
  managerBloc.refs = [];

  let eventBloc = new UIEventBloc();

  const ref = useRef();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const KeyProps = useMemo(
    () => (
      <KeyProperties
        {...props}
        {...ref}
        eventBloc={eventBloc}
        managerBloc={managerBloc}
      />
    ),
    [eventBloc, managerBloc]
  );

  return (
    <div className={classes.root}>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        {KeyProps}
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <KeyInfo {...props} {...ref} />
      </TabPanel>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab
          icon={<FontAwesomeIcon icon={faTools} size="lg" />}
          className={classes.tab}
        />
        <Tab
          icon={<FontAwesomeIcon icon={faInfoCircle} size="lg" />}
          className={classes.tab}
        />
      </Tabs>
    </div>
  );
});

export default Properties;
