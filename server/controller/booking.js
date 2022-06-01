import bookingModel from "../model/bookingModel.js";
import bookingCiubar from "../model/bookingCiubar.js";
import userModel from "../model/userModel.js";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
const stripe = new Stripe(
  "sk_test_51KytTpLuy8CHjVd0PkkeXO5j9brM0fjWLIC37lLjVo65WyO0uHk8cv9kdxs8zJLLcomR9Ozm2s2BodDwLjnIMiPc00R9Bs9z4A"
);

export const booking = async (req, res) => {
  const { token, currency } = req.body;

  
  
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: req.body.amount * 100,
        currency: currency,
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      req.body.transactionId = payment.source.id;
      // console.log(req.body);
      if (req.body.name === "cabana") {
        let newbooking = new bookingModel(req.body);
        await newbooking.save();
        res
          .status(200)
          .json({ newbooking, message: "Your booking is successfullyy" });
      } else {
        let newbooking = new bookingCiubar(req.body);
        await newbooking.save();
        res
          .status(200)
          .json({ newbooking, message: "Your booking is successfullyy" });
      }
    } else {
      return res.status(400).json(error);
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const find = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;

    bookingModel
      .find({ user: id })
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

    /*
    // get all users with reservation

    bookingModel
      .find()
      .then(async (data) => {
        const users = []
        for(let booking of data) {
          // console.log(booking);
          const user = await userModel.findById(booking.user).lean()
          users.push(user)
        }
        res.send(users.filter(el => !!el));
      })
    */
      bookingModel
      .find()
      .populate('user', ['name', 'email', 'phoneNumber'])
      .then( (data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

export const findCiubar = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;

    bookingCiubar
      .find({ user: id })
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
    bookingCiubar
    .find()
    .populate('user', ['name', 'email', 'phoneNumber'])
    .then( (data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error Occurred while retriving user information",
      });
    });
  }
};

export const remove = (req, res) => {
  const id = req.params.id;

  bookingModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "Rezervarea a fost stearsa cu succes",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

export const removeCiubar = (req, res) => {
  const id = req.params.id;

  bookingCiubar
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "Rezervarea a fost stearsa cu succes",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

export const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  bookingModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};
