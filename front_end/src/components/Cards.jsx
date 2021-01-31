import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: "100%",
    backgroundColor:"#F3F6F7 ",
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

  
  export default function SimpleCard (props) {
    const classes = useStyles();
  
  
return (
<div>
  
    
    <paper className={classes.paper} >
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2" style={{color:'blue'}}>
        {props.element.name}
        </Typography>
        <Typography variant="h5" component="h2" style={{color:'green'}}>
        Shop Name : {props.element.shopname}
        </Typography>
        <Typography variant="h5" component="h2">
         Location:{props.element.location}
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
       contact_details:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        phone no1 :{props.element.phoneno1}

       phone no2 : {props.element.phoneno2}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       Full  Adress: {props.element.address}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <i class="fas fa-motorcycle">f21c </i>
       <DriveEtaIcon/>
       
      </CardContent>
   
    </Card>
    </paper>
    
  
    </div>
  );


 }


