import  mongoose  from "mongoose";


const bookingSchema = new mongoose.Schema({

      // car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      transactionId : {type : String},  
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      bookTime : {
          fromDate : {type : String} ,
          toDate : {type : String}
      } ,
      // totalAmount : {type : Number},


},
  {timestamps : true}
)

export default mongoose.model("bookings", bookingSchema);

// const bookingModel = mongoose.model('bookings' , bookingSchema)

// module.exports = bookingModel