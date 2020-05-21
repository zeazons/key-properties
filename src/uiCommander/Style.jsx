import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabPanel: {
    width: "100%",
    borderRight: `1px solid #CED4DA`,
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    minWidth: 60,
    width: 60,
    "&:focus": {
      outline: "none",
    },
  },
}));
