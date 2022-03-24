import  mongoose  from "mongoose";

let house =new  mongoose.Schema({

  extraServices : {type : mongoose.Schema.Types.ObjectID , ref:'servicesdb'},
  description: { type: String }

})

export const houseDB= mongoose.model('housedb',house);

