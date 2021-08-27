const  express=require('express');
const mechanicrouter=express.Router();

const database=require('../models/database');
let DB;

const mechanic=DBConnect=>{
    DB=database(DBConnect);
    return mechanicrouter;
}

mechanicrouter.route('/')

.get((req,res,next) =>{  
    DB.listAllMechanics()
        .then(result=>{
            res.status(200).send(result);
        })
        .catch(err=>{
            res.status(500).send();
        })
})
.post((req,res,next)=>{
    DB. addMechanic(req.body)
        .then(result=>{
            res.status(200).send(result);
        })
        .catch(err=>{
            res.status(500).send();
        })
})

module.exports=mechanic;

