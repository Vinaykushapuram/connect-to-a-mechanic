const  express=require('express');
const mechanicbylocation=express.Router();

const database=require('../models/database');
let DB;

const mechanic=DBConnect=>{
    DB=database(DBConnect);
    return mechanicbyrouter;
}

mechanicbylocation.route('/bylocation/:location')

.get((req,res,next) =>{  
    var {location}=req.params;
    DB.listMechanicByLocation(location)
        .then(result=>{
            res.status(200).send(result);
        })
        .catch(err=>{
            res.status(500).send();
        })
});

module.exports=mechanic;