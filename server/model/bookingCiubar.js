import  mongoose  from "mongoose";


const bookingSchema = new mongoose.Schema({

      transactionId : {type : String},  
      user : {type : mongoose.Schema.Types.ObjectID , ref:'User'},
      bookTime : {
        fromDateCiubar : {type : String} ,
        toDateCiubar : {type : String}
      },
      name: {type: String},
      amount : {type : Number}
},
  {timestamps : true}
)

export default mongoose.model("bookingsC", bookingSchema);

