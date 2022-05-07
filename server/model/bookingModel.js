import  mongoose  from "mongoose";


const bookingSchema = new mongoose.Schema({

      // car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      bookTime : {
          fromDate : {type : String} ,
          toDate : {type : String}
      } ,
      // totalAmount : {type : Number},
      // transactionId : {type : String},


},
  {timestamps : true}
)

export default mongoose.model("bookings", bookingSchema);

// const bookingModel = mongoose.model('bookings' , bookingSchema)

// module.exports = bookingModel