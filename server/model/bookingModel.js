import  mongoose  from "mongoose";

let booking =new  mongoose.Schema({

  user : {type : mongoose.Schema.Types.ObjectID , ref:'userdbs'},
  extraServices : {type : mongoose.Schema.Types.ObjectID , ref:'servicesdb'},
  house : {type : mongoose.Schema.Types.ObjectID , ref:'userdbs'},
  dateFrom: { type: String },
  dateTo: { type: String }
  // dateFrom: { type: Date, default: Date.now },
  // dateTo: { type: Date, default: Date.now },

})

export const bookingDB= mongoose.model('bookingdb',booking);

