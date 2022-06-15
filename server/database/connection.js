import mongoose from'mongoose';
import 'dotenv/config' 

const connectDB=async()=>{
  try {
    const con=await mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology:true})
    console.log("MongoDb connected",con.connection.host)
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
