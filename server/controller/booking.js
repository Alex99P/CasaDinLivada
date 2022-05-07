import bookingModel from "../model/bookingModel.js";

export const booking = async (req, res) => {
  
  // req.body.transactionId='1234';
  
  try {
    // console.log("1",req.body);
  
const newbooking= new bookingModel(req.body);
// console.log("2",newbooking);
await newbooking.save();
// const result = await bookingModel.create({
  //   user:req.body.user,
  //   bookedTime:{
  //     from: req.body.bookTime.from,
  //     to: req.body.bookTime.to
  //   }
  // });
  // console.log("3",newbooking);
  
    
    res.status(200).json({newbooking, message:"Your booking is successfullyy"});
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const find = (req, res)=>{
  if(req.params.id){
      const id = req.params.id;

      bookingModel.findById(id)
          .then(data =>{
              if(!data){
                  res.status(404).send({ message : "Not found user with id "+ id})
              }else{
                  res.send(data)
              }
          })
          .catch(err =>{
              res.status(500).send({ message: "Erro retrieving user with id " + id})
          })

  }else{
    bookingModel.find()
          .then(data => {
              res.send(data)
          })
          .catch(err => {
              res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
          })
  }
}

export const remove = (req, res)=>{
  const id = req.params.id;
  

  bookingModel.findByIdAndDelete(id)
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
          }else{
              res.send({
                  message : "Rezervarea a fost stearsa cu succes"
              })
          }
      })
      .catch(err =>{
          res.status(500).send({
              message: "Could not delete User with id=" + id
          });
      });
}


export const update = (req, res)=>{
  if(!req.body){
      return res
          .status(400)
          .send({ message : "Data to update can not be empty"})
  }

  const id = req.params.id;
  bookingModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({ message : "Error Update user information"})
      })
}