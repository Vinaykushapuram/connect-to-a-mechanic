import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: "100%",
    backgroundColor:"#EAECEE",
    padding:"10px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color:"red"
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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div >
    <paper className={classes.paper} >
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          mech.name
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
       mech.rating 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       contact_details:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        phone no_1:   99893011029931 
        phone no_2:   12236371239903  
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Adress: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
       <DriveEtaIcon/>
      </CardContent>
   
    </Card>
    </paper>
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          mech.name
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
       mech.rating 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       contact_details:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        phone no_1:   99893011029931 
        phone no_2:   12236371239903  
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Adress: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
       <DriveEtaIcon/>

      </CardContent>
     
    </Card>
    </div>
    
  );
}
