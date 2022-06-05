import  mongoose  from "mongoose";


const bookingSchema = new mongoose.Schema({

      transactionId : {type : String},  
      user : {type : mongoose.Schema.Types.ObjectID , ref:'User'},
      bookTime : {
          fromDate : {type : String} ,
          toDate : {type : String}
      },
      name: {type: String},
      withCiubar: {type: Boolean,default: false},
      amount : {type : Number}
},
  {timestamps : true}
)

export default mongoose.model("bookings", bookingSchema);

