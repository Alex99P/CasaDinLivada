import express from "express";
const router = express.Router();

import { booking,find,findCiubar,remove,update } from "../controller/booking.js";


router.post("/bookingHouse", booking);
router.post("/bookingCiubar", booking);
router.get('/house',find);
router.get('/ciubar',findCiubar);
router.delete('/booking/:id',remove);
router.put('/booking/:id',update);




export default router;