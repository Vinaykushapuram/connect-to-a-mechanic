import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Mechimage from './mechanicphoto.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
  
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
      flexGrow: 1,
      padding:20,
      fontsize:30
    }
    ,
    layout: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundcolor:'red',
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: { 
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      }
  }
  }));
  export default function Header()
  {
      const classes=useStyles();
      return (
          <div>
          <main className={classes.layout}>
          <div className={classes.root}>
            <AppBar position="static">
              <Typography
                className={classes.title}
                style={{ textAlign: "center" ,fontSize:"45px" }}
               
                Wrap
              >
              <img src={Mechimage} style={{height:'55px',width:'100px'}} />
                CONNECT TO A MECHANIC
               
              </Typography>
             
            </AppBar>    
          </div>
          </main>
          
          </div>
      )
  }