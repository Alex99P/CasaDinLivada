import  mongoose  from "mongoose";

let review =new  mongoose.Schema({

  user : {type : mongoose.Schema.Types.ObjectID , ref:'userdbs'},
  house : {type : mongoose.Schema.Types.ObjectID , ref:'housedbs'},
  description: { type: String }

})

export const reviewDB= mongoose.model('reviewdb',review);

