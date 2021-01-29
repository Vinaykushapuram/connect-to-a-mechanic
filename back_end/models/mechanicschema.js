const mongoose=require('mongoose');


const Schema=mongoose.Schema ;

const mechanicschema=new Schema(
    {
    name :
    {
        type:String,
        required :true,
         unique:true
    },
    shopname :
    {
        type:String,
        required :true,
        
    },
    phoneno1 :
    {
        type:Number,
        required:true,
        unique :true,
    },
    phoneno2 :
    {
        type:Number,
        
        unique :true,
    },
  address : {
      type:String,
      unique:true,
      required:true
  },
  bike :
  {
      type:Boolean,
      required:true
  },
  tractor :
  {
      type:Boolean,
      required:true
  },
  car :
  {
      type:Boolean,
      required:true
  },
 
  bus :
  {
      type:Boolean,
      required:true
  },
  vehicles:
  {
      type:Boolean,
      required:true
  },
  location :
  {
      type:String,
      required:true,
  }
},
  {timestamps :true}


);
var mechanics=mongoose.model('mechanics',mechanicschema);
module.exports=mechanics;

