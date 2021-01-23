import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
         
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Shop Name"
            name="Shop Name"
            label="Shop Name"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address "
            fullWidth
      
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
         
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
        
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="phone number 1"
          name="phone number 1"
          label="phone number"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="phone number 2"
          name="phone number 2"
          label="Alternate number"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="Bike"
          name="Bike"
          label="can you repair a bike (yes or no)"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="Bike"
          name="Bike"
          label="can you repair a tractor (yes or no)"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="Bike"
          name="Bike"
          label="can you repair a car (yes or no)"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="Bike"
          name="Bike"
          label="can you repair a bus (yes or no)"
          fullWidth
      
        />
        </Grid>
        <Grid item xs={12} >
        <TextField
          required
          id="Bike"
          name="Bike"
          label="can you repair any other vehicles (yes or no)"
          fullWidth
      
        />
        </Grid>

       
      </Grid>
    </React.Fragment>
  );
}