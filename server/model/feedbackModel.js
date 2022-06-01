import  mongoose  from "mongoose";


const feedbackSchema = new mongoose.Schema({

      id: { type: String },
      user : {type : mongoose.Schema.Types.ObjectID , ref:'User'},
      name: {type : String},
      feedback: {type: String},
      rating :{type : Number},
})

export default mongoose.model("feedback", feedbackSchema);

