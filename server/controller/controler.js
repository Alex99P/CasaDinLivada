// import {userDB} from "../model/userModel.js"
import {bookingDB} from "../model/bookingModel1.js"
import {servicesDB} from "../model/servicesModel.js"
import {houseDB} from "../model/houseModel.js"
import {reviewDB} from "../model/reviewModel.js"
import UserModal from "../model/userModel.js";




export const createUser= async(req,res)=>{
  const userBody=req.body;
  const bookingBody=req.body;


  const user = new userDB({
    username: userBody.username,
    email: userBody.email,
    phoneNumber:userBody.phoneNumber

  })

  try {
    const savedUser = await user.save(user)
    res.send(savedUser);

    // const booking = new bookingDB({
    //   user: savedUser._id,
    //   dateFrom: bookingBody.dateFrom,
    //   dateTo: bookingBody.dateTo
    // })
    
    // try{
    //   const savedBooking = await booking.save(booking)
    //   res.send(savedBooking)
    // }catch(err) {
    //   res.status(500)
    //   res.send(err)
    // }
  }catch(err) {
    res.status(500)
    res.send(err)
  } 
  

}

export const find = (req, res)=>{
  if(req.params.id){
      const id = req.params.id;

      UserModal.findById(id)
          .then(data =>{
              if(!data){
                  res.status(404).send({ message : "Not found user with id "+ id})
              }else{
                  res.send(data)
              }
          })
          .catch(err =>{
              res.status(500).send({ message: "Erro retrieving user with iddd " + id})
          })

  }else{
    UserModal.find()
          .then(user => {
              res.send(user)
          })
          .catch(err => {
              res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
          })
  }
}


export const update = (req, res)=>{
  if(!req.body){
      return res
          .status(400)
          .send({ message : "Data to update can not be empty"})
  }

  const id = req.params.id;
  userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
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



export const remove = (req, res)=>{
  const id = req.params.id;

  UserModal.findByIdAndDelete(id)
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
          }else{
              res.send({
                  message : "User was deleted successfully!"
              })
          }
      })
      .catch(err =>{
          res.status(500).send({
              message: "Could not delete User with id=" + id
          });
      });
}





