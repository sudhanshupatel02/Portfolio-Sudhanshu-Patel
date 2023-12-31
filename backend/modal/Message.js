const mongoose=require('mongoose');

const messageSchema =new mongoose.Schema({

   name:{type:String , required:true},
   email:{ type:String , required:true},
   subject:{ type:String ,default:"General"},
   msg:{ type:String , required:true},

})

module.exports= mongoose.model("notes",messageSchema);