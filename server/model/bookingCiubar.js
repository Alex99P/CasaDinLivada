import  mongoose  from "mongoose";


const bookingSchema = new mongoose.Schema({

      // car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      transactionId : {type : String},  
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      bookTime : {
        fromDateCiubar : {type : String} ,
        toDateCiubar : {type : String}
      },
      name: {type: String}
      // totalAmount : {type : Number},
},
  {timestamps : true}
)

export default mongoose.model("bookingsC", bookingSchema);

