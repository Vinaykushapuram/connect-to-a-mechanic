const  express=require('express');
const   bodyparser=require('body-parser');
const  mechanics=require('../models/mechanicschema.js');

const mechanicrouter=express.Router();

mechanicrouter.use(bodyparser.json());

mechanicrouter.route('/')

.get((req,res,next) =>
{ const query={"location":"hyderabad"};
    mechanicsdb.find(query)
    .then(mechanics=>
        {
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(mechanics)
        },(err)=>next(err))
        .catch((err)=>next(err))

})
.post((req,res,next)=>
{
    mechanicsdb.create(req.body)
    .then((mechanic)=>
    {
        console.log('profile created',mechanic);
        res.statuscode=200;
        res.setHeader('Content-type','application/json');
        res.json(mechanic);
    }
,(err)=>next(err))
.catch((err)=>next(err))
});
module.exports=mechanicrouter;

