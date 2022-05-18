import express from "express";
const router = express.Router();

import { signin, signup,update } from "../controller/user.js";


router.post("/signin", signin);
router.post("/signup", signup);
router.put('/edit/:id',update);


export default router;