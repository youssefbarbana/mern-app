const  mongoose  = require("mongoose");
const schema=mongoose.Schema
const contactschema=new schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:String
})
module.exports=contact=mongoose.model('contact',contactschema)
