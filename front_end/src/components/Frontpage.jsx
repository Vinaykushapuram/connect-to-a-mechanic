import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Buttons from "./Buttons.jsx";
import Location from "./Locationsearch.jsx";
import Cards from "./Cards.jsx";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding :"20px",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Frontpage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography
          className={classes.title}
          style={{ textAlign: "center" }}
          variant="h4"
          noWrap
        >
          CONNECT TO A MECHANIC
        </Typography>
        <Typography
          className={classes.title}
          style={{ textAlign: "center" }}
          variant="h4"
          noWrap
        >
          CONNECT TO A MECHANIC
        </Typography>
      </AppBar>
      <Buttons />
      <Location />
      <Cards />
   
     
    </div>
  );
}