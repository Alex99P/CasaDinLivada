import express from "express";
import { createPost,findPost } from "../controller/feedback.js";
const router = express.Router();



router.post("/post", createPost);
router.get("/", findPost);


export default router;