import { makeStyles } from "@material-ui/core/styles";
import { colorPalette } from "./colorPalette";
import { important } from "./styleUtils";

const drawerWidth = 240;

export const drawerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `100%`,
      marginLeft: drawerWidth,
    },
    zIndex: 1400,
    backgroundColor: colorPalette["lapis-lazuli"],
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const listStyles = makeStyles((theme) => ({
  lsitItemSelected: {
    backgroundColor: important(colorPalette["light-steel-blue"]),
  },
  root: {
    color: important(colorPalette.white),
  },
}));
