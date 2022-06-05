import feedbackModel from "../model/feedbackModel.js"

export const createPost = async (req, res) => {
  

  if(Object.keys(req.body).length !== 0){
  let newPost = new feedbackModel(req.body);
  await newPost.save();
  res
    .status(200)
    .json({ newPost, message: "Success" });
  }
  else{
    res.json({message: "Feedbackul nu este valid"})
  }

}


export const findPost = (req, res) => {

  if (req.params.id) {
    const id = req.params.id;


    feedbackModel
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    feedbackModel
      .find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};