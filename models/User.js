const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
     name:{
         type:String,
         required:true
     },
    email: {
         type:String,
         required:true
     },
     password:{
         type:String,
         required:true
     },
     date:{
         type:Date,
         default:Date.now
     },
     timesheet:{
         type:Array,
         required:true
     }
 });
 module.exports = User = mongoose.model('Users',userSchema)