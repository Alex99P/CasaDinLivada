import  mongoose  from "mongoose";

let user =new  mongoose.Schema({

  username:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
    // unique: true
  },
  // password:{
  //   type: String,
  //   required: true
  // },
  // admin:Boolean,
  phoneNumber:{
    type: String,
    required: true
  },
})



export const userDB= mongoose.model('userdb',user);