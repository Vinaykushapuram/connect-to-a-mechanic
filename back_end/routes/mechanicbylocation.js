const  express=require('express');
const   bodyparser=require('body-parser');
const  Mechanics=require('../models/mechanicschema.js');
console.log('hi man');
const mechanicbylocation=express.Router();

mechanicbylocation.use(bodyparser.json());

mechanicbylocation.route('/bylocation/:location')

.get((req,res,next) =>
{  
 var query=req.params;
    Mechanics.find(query)
    .then(mechanics1=>
        {
            
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(mechanics1)
        },(err)=>next(err))
        .catch((err)=>next(err))

})
;

module.exports=mechanicbylocation;