import express from "express";
const router = express.Router();

import { booking,find,findCiubar,remove,removeCiubar,update } from "../controller/booking.js";
import {getCurrency} from "../Currency/currency.js"


router.post("/bookingHouse", booking);
router.post("/bookingCiubar", booking);
router.get('/house',find);
router.get('/house/:id',find);
router.get('/ciubar',findCiubar);
router.get('/ciubar/:id',findCiubar);
router.delete('/house/:id',remove);
router.delete('/ciubar/:id',removeCiubar);
router.put('/booking/:id',update);

router.get('/currency',getCurrency);





export default router;