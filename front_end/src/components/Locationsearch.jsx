import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import MechanicByLocation from './MechanicByLocation';
import { Link, Redirect } from 'react-router-dom';



class Locationsearch extends React.Component {

  constructor(props)
  {
    super(props);
    console.log(props);
    this.state={
      url:'http://localhost:3000/bylocation/',
      location:'',
  
     };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.mechanic_by_location_connector=this.mechanic_by_location_connector.bind(this);
   
  }
  handleInputChange= (event) =>{

    let name=event.target.name;
    let val=event.target.value;
    this.setState({[name]:val});
  
}

classes = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

mechanic_by_location_connector()
{   console.log('sent message to mechanicsbylocation');

  return   (
    <div>
  <MechanicByLocation  url={this.state.url} location={this.state.location} />
  </div>
  );
}

render(){
  return (
    <div>
      <FormControl className={this.classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Location</InputLabel>
        <Input
          id="input-with-icon-adornment"
           name='location'
           value={this.state.location}
           onChange={this.handleInputChange}
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
        />
        
   
    <Link   to={"/"+this.state.location }>
      <Button variant="outlined" color="primary"  onClick={ this.mechanic_by_location_connector  }>
      Search
      </Button>
      </Link>
      </FormControl>
      
     
    </div>
  );
        }
}
export default Locationsearch;

