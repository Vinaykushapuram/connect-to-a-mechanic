import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const axios = require('axios').default;
class AddressForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
        firstName:'',
        lastName:'',
        shopname:'',
        address:'',
        shoplocation:'',
        phonenumber1:'',
        phonenumber2:'',
        bike:'',
        tractor:'',
        bus:'',
        car:'',
        vehicle:'',

        
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
}
handleInputChange= (event) =>{
    let name=event.target.name;
    let val=event.target.value;
    this.setState({[name]:val});
}
handleSubmit= (event) =>{

    event.preventDefault();
    axios.post('http://localhost:3000/',{
        name:this.state.firstName,
        shopname:this.state.shopname,
        phoneno1:this.state.phonenumber1,
        phoneno2:this.state.phonenumber2,
        address:this.state.address,
        bike:this.state.bike,
        tractor:this.state.tractor,
        car:this.state.car,
        bus:this.state.bus,
        vehicles:this.state.vehicle,
        location:this.state.shoplocation,
       
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
    this.setState({
      firstName:'',
      lastName:'',
      shopname:'',
      address:'',
      shoplocation:'',
      phonenumber1:'',
      phonenumber2:'',
      bike:'',
      tractor:'',
      bus:'',
      car:'',
      vehicle:'',

    });
}
  render()
  {return (
    <React.Fragment>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
        
            required
            
            id="firstName"
            name="firstName"
            label="First name"
            value={this.state.firstname}
            onChange={this.handleInputChange}
            variant="outlined"
            fullWidth
         
          /> 
         
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            variant="outlined"
            fullWidth
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Shop Name"
            name="shopname"
            label="Shop Name"
            variant="outlined"
            value={this.state.shopname}
            onChange={this.handleInputChange}
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address "
            variant="outlined"
            value={this.state.address}
            onChange={this.handleInputChange}
            fullWidth
      
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="location"
            name="shoplocation"
            label="Shop Location"
            variant="outlined"
            value={this.state.shoplocation}
            onChange={this.handleInputChange}
            fullWidth
         
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="phone number 1"
          name="phonenumber1"
          label="phone number"
          value={this.state.phonenumber1}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="phone number 2"
          name="phonenumber2"
          label="Alternate number"
          value={this.state.phonenumber2}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="Bike"
          name="bike"
          label="can you repair a bike (yes or no)"
          value={this.state.bike}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="tractor"
          name="tractor"
          label="can you repair a tractor (yes or no)"
          value={this.state.tractor}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="car"
          name="car"
          label="can you repair a car (yes or no)"
          value={this.state.car}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="bus"
          name="bus"
          label="can you repair a bus (yes or no)"
          value={this.state.bus}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} >
        <TextField
          required
          id="vehicle"
          name="vehicle"
          label="can you repair any other vehicles (yes or no)"
          value={this.state.vehicle}
          onChange={this.handleInputChange}
          variant="outlined"
          fullWidth
      
        />
        </Grid>

       
      </Grid>
      <Button variant="outlined" color="primary" align="center"  onClick={this.handleSubmit}>
      submit
     </Button>
    </React.Fragment>
  );
  }
}
export default  AddressForm;
