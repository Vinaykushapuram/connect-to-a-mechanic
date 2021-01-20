import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DriveEtaIcon from '@material-ui/icons/DriveEta';



const useStyles = makeStyles({
  root: {
    maxWidth: 575,
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
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
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
  );
}
