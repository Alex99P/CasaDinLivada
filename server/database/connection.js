import mongoose from'mongoose';

const connectDB=async()=>{
  try {
    const con=await mongoose.connect("mongodb+srv://Alex:alex100699@cluster0.ox4rb.mongodb.net/CasaDinLivada?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology:true})
    console.log("MongoDb connected",con.connection.host)
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
