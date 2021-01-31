const  express=require('express');
const   bodyparser=require('body-parser');
const  Mechanics=require('../models/mechanicschema.js');

const mechanicbylocation=express.Router();

mechanicbylocation.use(bodyparser.json());

mechanicbylocation.route('/:mechanicId')

.get((req,res,next) =>
{  
 var query={phoneno1:req.params.mechanicId};
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