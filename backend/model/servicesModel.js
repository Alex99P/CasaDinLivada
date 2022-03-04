import  mongoose  from "mongoose";

let services =new  mongoose.Schema({

  description: { type: String },
  price: { type: Number },
  photos: String  // TODO search how to add photos

})

export const servicesDB= mongoose.model('servicesdb',services);

