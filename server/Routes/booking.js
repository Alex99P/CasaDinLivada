import express from "express";
const router = express.Router();

import { booking,find,remove,update } from "../controller/booking.js";


router.post("/bookingHouse", booking);
router.get('/bookings',find);
router.delete('/booking/:id',remove);
router.put('/booking/:id',update);




export default router;